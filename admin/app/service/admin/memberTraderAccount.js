'use strict';

const BaseService = require('../base');
const md5 = require('md5');

class MemberTraderAccountService extends BaseService {
    async getOne(query){
        if(query && query.id){
            const data = await this.sql.select(this.table,{
                where: {
                    memberId: query.id,
                }
            })
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
        if(data.hasOwnProperty('password')){
            data.password = md5(data.password);
        }
        return await this.sql.update(this.table,data);
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
