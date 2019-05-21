'use strict';

const BaseController = require('../base');

/**
 * 会员
 */
class MemberController extends BaseController {
    async index() {
        const {ctx} = this;
        const data = await this.myService.list();
        ctx.body = {
            data,
            code: 200,
        }
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

module.exports = MemberController;
