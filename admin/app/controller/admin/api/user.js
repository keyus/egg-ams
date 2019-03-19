'use strict';

const Controller = require('egg').Controller;


const indexRule={
    username: {
        type: 'string',
        required: false,
    },
}
/**
 * 管理员
 */
class UserController extends Controller {
    //管理员列表
    async index() {
        const {ctx} = this;
        ctx.validate(indexRule, ctx.query);
        const user = await ctx.service.admin.user.list(ctx.query);
        ctx.body = {
            data: user,
            code: 200,
        }
        ctx.status = 200;
    }
    //创建管理员
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        ctx.validate({username: 'string',password: 'string'},body);
        const res = await ctx.service.admin.user.create(body);
        ctx.body = {
            data: res.has ? false : res.data,
            code: res.has ? -1 : 200,
            message: res.has ? '用户名已存在' : '添加成功'
        }
        ctx.status = 200;
    }
    //更新管理员
    async update(){
        const {ctx} = this;
        const {params} = ctx;
        const body = ctx.request.body;
        ctx.validate({id: 'string',username: 'string'},{...body,id: params.id});
        const res = await ctx.service.admin.user.update(body);
        ctx.body = {
            data: res ? true : false,
            code: res ? 200 : -1,
            message: res ? '更新成功' : '更新失败',
        }
        ctx.status = 200;
    }
    //删除管理员
    async destroy(){
        const {ctx} = this;
        ctx.validate({id: 'string'}, ctx.params);
        const res = await ctx.service.admin.user.deleteUser(ctx.params);
        ctx.body = {
            data: res ? true : false,
            code: res ? 200 : -1,
            message: res ? '删除成功' : '删除失败',
        }
        ctx.status = 200;
    }

}

module.exports = UserController;
