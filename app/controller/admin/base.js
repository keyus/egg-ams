'use strict';

const Controller = require('egg').Controller;

/**
 * 分类
 */
class BaseController extends Controller {
    get myService(){
        const constructorName = this.constructor.name;
        let serviceName = constructorName.match(/^\w+(?=Controller)/i);
        serviceName = serviceName[0].toLocaleLowerCase()
        return this.ctx.service.admin[serviceName];
    }
}

module.exports = BaseController;
