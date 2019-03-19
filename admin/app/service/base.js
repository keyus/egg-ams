'use strict';

const Service = require('egg').Service;
class BaseService extends Service {
    get sql (){
        return this.app.mysql;
    }
    get table(){
        const constructorName = this.constructor.name;
        let serviceName = constructorName.match(/^\w+(?=Service)/i);
        serviceName = serviceName[0].toLocaleLowerCase()
        return `${this.config.tablePrefix}${serviceName}`;
    }
}
module.exports = BaseService;
