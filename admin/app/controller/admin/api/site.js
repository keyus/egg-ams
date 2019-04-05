'use strict';

const BaseController = require('../base');

/**
 * 站点配置
 */
class SiteController extends BaseController {
    async index() {
        const {ctx} = this;
        const data = await this.myService.getData();
        ctx.body = {
            data,
            code: 200,
        }
        ctx.status = 200;
    }
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        const res = await this.myService.update(body);
        ctx.body = {
            data: res.affectedRows ? true : false,
            code: res.affectedRows ? 200 : -1,
            message: res.affectedRows ? '更新成功' : '更新失败',
        }
        ctx.status = 200;
    }
}

module.exports = SiteController;
