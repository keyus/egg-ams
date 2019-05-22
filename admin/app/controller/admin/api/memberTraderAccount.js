'use strict';

const BaseController = require('../base');

/**
 * 交易账号
 */
class MemberTraderAccountController extends BaseController {
    async index() {
        const {ctx} = this;
        const query = ctx.request.query;
        const res = await this.myService.getOne(query);
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
        ctx.validate({id: 'string'},{...body,id: params.id});
        const res = await this.myService.update(body);
        ctx.body = {
            data: res ? true : false,
            code: res ? 200 : -1,
            message: res ? '更新成功' : '更新失败',
        }
        ctx.status = 200;
    }
    //删除
    async destroy(){
        const {ctx} = this;
        ctx.validate({id: 'string'}, ctx.params);
        const res = await this.myService.deleteRow(ctx.params);
        ctx.body = {
            data: res ? true : false,
            code: res ? 200 : -1,
            message: res ? '删除成功' : '删除失败',
        }
        ctx.status = 200;
    }
}

module.exports = MemberTraderAccountController;
