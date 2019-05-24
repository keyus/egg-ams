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
                    where += `and ${key} = ${val}`;
                }else{
                    where = `where ${key} = ${val}`;
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
        const res = await this.sql.insert(this.table,{
            ...data,
        });
        if(res.affectedRows === 1){
            return {
                code: 200,
                data: res,
            }
        }
        return {
            code: -1,
            message: '添加失败'
        }
    }
}

module.exports = MoneyDetailsService;
