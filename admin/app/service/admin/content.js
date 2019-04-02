'use strict';

const BaseService = require('../base');


class ContentService extends BaseService {
    async getOne(id) {
        return await this.sql.get(this.table,{
            id
        })
    }
    async deleteRow({id}){
        return await this.sql.delete(this.table,{
            id
        })
    }
}

module.exports = ContentService;
