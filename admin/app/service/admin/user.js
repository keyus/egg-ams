'use strict';

const BaseService = require('../base');
const md5 = require('md5');

class UserService extends BaseService {
    async list({username}) {
        const when = {
            where: {}
        };
        if(username){
            if(/^\d+$/i.test(username)){
                when.where.id = username;
            }else{
                when.where.username = username;
            }
        }
        const res = await this.sql.select(this.table,{
            ...when,
            orders: [['sorter','desc']],
            columns: ['id','username','role','sorter','nickname','note','create_time','update_time']
        })
        return res;
    }
    //删除用户
    async deleteUser({id}){
        if(data.id === 1) return false;                             //禁止删除超管
        return await this.sql.delete(this.table,{
            id
        })
    }
    async update(data){
        if(data.id === 1) return false;                             //禁止修改超管
        const res = await this.sql.get(this.table,{id: data.id});
        if(res && res.username !== data.username){
            return false;
        }
        delete data.confirmPassword;
        if(data.password) {
            data.password = md5(data.password);
        }else{
            delete data.password;
        }
        return await this.sql.update(this.table,data);
    }
    async create(data){
        const has = await this.sql.get(this.table,{username: data.username});
        if(has){
            return {
                has: true,
            };
        }
        data.password = md5(data.password)
        delete data.confirmPassword;
        const res = await this.sql.insert(this.table,data);
        return {
            has: false,
            data: res,
        };
    }
}

module.exports = UserService;
