'use strict';

const Controller = require('egg').Controller;

/**
 * 分类
 */
class BaseController extends Controller {
    get myService(){
        const constructorName = this.constructor.name;
        let serviceName = constructorName.match(/^\w+(?=Controller)/i);
        let firstLetter = serviceName[0].substr(0,1).toLocaleLowerCase();
        serviceName = firstLetter + serviceName[0].substr(1);
        return this.ctx.service.admin[serviceName];
    }
}

module.exports = BaseController;
