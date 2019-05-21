'use strict';

const BaseService = require('../base');
const md5 = require('md5');

class MemberService extends BaseService {
    async list() {
        return await this.sql.select(this.table,{
            orders: [['create_time','desc']]
        });
    }
    async update(data){
        if(data.hasOwnProperty('password')){
            data.password = md5(data.password);
        }
        return await this.sql.update(this.table,data);
    }
    async create(data){
        const find = await this.sql.get(this.table,{
            phone: data.phone,
        })
        if(find){
            return {
                code: -1,
                message: '手机号已被注册',
            }
        }
        data.password = md5(data.password);
        const res = await this.sql.insert(this.table,{
            ...data,
        });
        return {
            code: 200,
            data: res,
            message: '添加成功'
        }
    }
}

module.exports = MemberService;
