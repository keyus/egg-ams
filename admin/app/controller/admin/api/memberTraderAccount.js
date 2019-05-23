'use strict';

const BaseController = require('../base');

/**
 * 交易账号
 */
class MemberTraderAccountController extends BaseController {
    async index() {
        const {ctx} = this;
        const query = ctx.request.query;
        const res = await this.myService.getData(query);
        ctx.body = res;
        ctx.status = 200;
    }
    //添加交易账号
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        ctx.validate({
            memberId: 'number',
            platformId: 'number',
            accountName: 'string',
        },body);
        const res = await this.myService.create({
            memberId: body.memberId,
            platformId: body.platformId,
            account: body.account,
            accountName: body.accountName,
        });
        ctx.body = res;
        ctx.status = 200;
    }
    async update(){
        const {ctx} = this;
        const {params} = ctx;
        const body = ctx.request.body;
        ctx.validate({
            id: 'string',
        },{...body,id: params.id});
        const res = await this.myService.update(body);
        ctx.body = res;
        ctx.status = 200;
    }
}

module.exports = MemberTraderAccountController;
