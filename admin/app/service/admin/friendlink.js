'use strict';

const BaseService = require('../base');


class FriendlinkService extends BaseService {
    async all() {
        return await this.sql.select(this.table,{
            order: [['sorter','desc']]
        });
    }
    async insert(data){
        return await this.sql.insert(this.table,data);
    }
    async update(data){
        return await this.sql.update(this.table,{
            ...data
        });
    }
    async destroy(id){
        return await this.sql.delete(this.table,{
            id,
        });
    }
}

module.exports = FriendlinkService;
