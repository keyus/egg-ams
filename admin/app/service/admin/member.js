'use strict';

const BaseService = require('../base');
const md5 = require('md5');

class MemberService extends BaseService {
    async list(query) {
        const {
            phone,
            status,
        } = query;
        const page = Number(query.page || 1);
        const size = Number(query.size || 10);
        const where = {};
        const limit = size;
        const offset = page * size - size;
        let whereStr = "";
        if(phone) {
            where.phone = phone;
            whereStr = `where phone = "${phone}"`
        }
        if(status) {
            where.status = status;
            if(whereStr)
            whereStr += `and status = ${status}`;
            else
            whereStr = `where status = ${status}`;
        }
        const count = await this.sql.query(`select count(id) from ${this.table} ${whereStr}`);
        const list =  await this.sql.select(this.table,{
            where,
            orders: [['create_time','desc']],
            limit,
            offset,
        });
        return {
            list,
            page,
            size,
            total: count[0]['count(id)'],
        }
    }
    async update(data){
        if(data.hasOwnProperty('password')){
            data.password = md5(data.password);
        }
        if(data.bankAccount || data.alipay){
            const find = await this.sql.get(this.table,{
                id: data.id,
            })
            if(find.withdrawSuccess){
                return {
                    code: -1,
                    message: '该用户已有成功提现记录，禁止修改收款账号',
                }
            }
        }
        const res = await this.sql.update(this.table,data);
        return {
            code: 200,
            data: res,
            message: '修改成功'
        }
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
