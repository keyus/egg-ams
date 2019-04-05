'use strict';

const BaseService = require('../base');


class SiteService extends BaseService {
    async getData() {
        return await this.sql.get(this.table,{id: 1});
    }
    async update(data){
        const find = await this.sql.get(this.table,{id:1})
        if(find){
            return await this.sql.update(this.table,{
                id: 1,
                ...data
            });
        }
        return await this.sql.insert(this.table,data);
    }
}

module.exports = SiteService;
