'use strict';

const BaseService = require('../base');


class MoneyDetailsService extends BaseService {
    async list(query){
        const page = Number(query.page || 1);
        const size = Number(query.size || 10);
        let where = '';
        ['money','memberPhone','platformId','account'].forEach(key=>{
            const val = query[key];
            if(val){
                if(where) {
                    where += `and ${key} = "${val}"`;
                }else{
                    where = `where ${key} = "${val}"`;
                }
            }
        })
        const count = await this.sql.query(`select count(id) from ${this.table} ${where}`);
        const sql = `
            select a.* , b.name as platformName from ${this.table} as a
            left join ${this.tablePrefix}platform as b
            on a.platformId = b.id
            ${where}
            order by create_time desc
            limit ${page * size - size},${size}
        `;
        const data = await this.sql.query(sql);
        return  {
            data,
            page,
            size,
            total: count[0]['count(id)'],
            code: 200,
        };
    }
    async create(data){
        const {
            money,
            entryType,
        } = data;
        const conn = await this.sql.beginTransaction();     // 初始化事务
        const member = await conn.get(`${this.tablePrefix}member`, {
            id: data.memberId,
        });
        let newMoney = 0;
        if(entryType === 2) {
            data.type = 0;
            newMoney = Number(member.money) - Number(money)
        }else{
            newMoney = Number(member.money) + Number(money)
        }
        try {
            //更新会员，返佣余额
            await conn.update(`${this.tablePrefix}member`,{
                money: newMoney,
            },{
                where: {
                    id: data.memberId,
                }
            });
            //添加资金明细 入账
            const res = await conn.insert(this.table,{
                ...data,
            });
            await conn.commit();
            return {
                code: 200,
                data: res,
            }
        } catch (err) {
            await conn.rollback();
            throw err;
            return {
                code: -1,
                message: '添加失败'
            }
        }

    }
}

module.exports = MoneyDetailsService;
