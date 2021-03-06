'use strict';

const BaseController = require('../base');

/**
 * 开户记录
 */
class OpenAccountController extends BaseController {
    async index() {
        const {ctx} = this;
        const data = await this.myService.list(ctx.request.query);
        ctx.body = data;
        ctx.status = 200;
    }
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        const res = await this.myService.create(body);
        ctx.body = {
            data: res ? true : false,
            code: res ? 200 : -1,
            message: res ? '添加成功' : '添加失败',
        }
        ctx.status = 200;
    }
    async update(){
        const {ctx} = this;
        const {params} = ctx;
        const body = ctx.request.body;
        ctx.validate({
            id: 'string',
            status: [1,2],
        },{...body,id: params.id});
        const res = await this.myService.update(body);
        ctx.body = res;
        ctx.status = 200;
    }
}

module.exports = OpenAccountController;
