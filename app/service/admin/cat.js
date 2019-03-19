'use strict';

const BaseService = require('../base');

class CatService extends BaseService {
    async list() {
        return await this.sql.select(this.table,{
            orders: [['sorter','desc']],
        })
    }
    //删除
    async deleteRow({id}){
        return await this.app.mysql.delete(this.table,{
            id
        })
    }
    async update(data){
        const res = await this.sql.get(this.table,{id: data.id});

        delete data.confirmPassword;
        if(data.password) {
            data.password = md5(data.password);
        }else{
            delete data.password;
        }
        return await this.sql.update(this.table,data);
    }
    async create(data){

    }
}

module.exports = CatService;
