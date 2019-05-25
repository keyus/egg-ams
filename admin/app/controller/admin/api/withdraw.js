'use strict';

const BaseController = require('../base');

/**
 * 提现记录
 */
class WithdrawController extends BaseController {
    async index() {
        const {ctx} = this;
        const data = await this.myService.list(ctx.request.query);
        ctx.body = data;
        ctx.status = 200;
    }
    async create(){
        const {ctx} = this;
        // const body = ctx.request.body;
        // const res = await this.myService.create(body);
        // ctx.body = res;
        ctx.status = 200;
    }
    async update(){
        const {ctx} = this;
        const body = ctx.request.body;
        ctx.validate({
            id: 'string',
            status: [0,1,2],
            money: 'number',
        },{...body,id: ctx.params.id});
        const res = await this.myService.update(body);
        ctx.body = res;
        ctx.status = 200;
    }
}

module.exports = WithdrawController;
