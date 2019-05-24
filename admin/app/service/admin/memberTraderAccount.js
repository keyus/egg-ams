'use strict';

const BaseService = require('../base');

class MemberTraderAccountService extends BaseService {
    async getData(query){
        const {
            id,                 //memberId,会员id
        } = query;
        const isPagination = query.page;                //是否启用分页
        const page = Number(query.page || 1);
        const size = Number(query.size || 10);

        //获取所有交易账号，分页
        if(isPagination){
            let where = '';
            query.memberId = query.id;
            ['memberId','account','platformId'].forEach(key=>{
                const val = query[key];
                if(val){
                    if(where) {
                        where += `and ${key} = ${val}`;
                    }else{
                        where = `where ${key} = ${val}`;
                    }
                }
            })
            const count = await this.sql.query(`select count(id) from ${this.table} ${where}`);
            const sql = `
                select a.*, b.name as platformName from ${this.table} as a 
                left join ${this.tablePrefix}platform as b
                on a.platformId = b.id
                ${where}
                limit ${page * size - size},${size}
             `;
            const data = await this.sql.query(sql);
            return {
                code: 200,
                data,
                page,
                size,
                total: count[0]['count(id)'],
            }
        }
        //不分页，仅获取指定会员ID，交易账号
        else{
            if(id){
                const sql = `
                select a.*, b.name as platformName from ${this.table} as a 
                left join ${this.tablePrefix}platform as b
                 on a.platformId = b.id where a.memberId = ${id}
             `;
                const data = await this.sql.query(sql);
                return {
                    code: 200,
                    data,
                }
            }else{
                return {
                    code: -1,
                    message: '参数错误'
                }
            }
        }

    }
    async update(data){
        const {id,account} = data;
        if(id && account){
            const res = await this.sql.update(this.table,{
                account,
            },{
                where: {
                    id,
                }
            });
            if(res.affectedRows === 1){
                return {
                    code: 200,
                    data: res,
                }
            }
        }
        return {
            code: -1,
            message: '更新失败'
        }
    }
    async create(data){
        const find = await this.sql.get(this.table,{
            account: data.account,
            platformId: data.platformId,
        })
        if(find){
            return {
                code: -1,
                message: '该交易商账号已被绑定',
            }
        }
        await this.sql.update(`${this.tablePrefix}member`,{
            hasAccount: 1,
        },{
            where: {
                id: data.memberId,
            }
        });
        const res = await this.sql.insert(this.table,{
            ...data,
        });
        return {
            code: 200,
            data: res,
            message: '交易账号绑定成功'
        }
    }
}

module.exports = MemberTraderAccountService;
