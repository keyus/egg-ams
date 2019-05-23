'use strict';

const BaseService = require('../base');
const md5 = require('md5');

class MemberTraderAccountService extends BaseService {
    async getData(query){
        if(query && query.id){
            const sql = `select a.*, b.name as platformName from ${this.table} as a left join ${this.tablePrefix}platform as b on a.platformId = b.id where a.memberId = ${query.id}`;
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
