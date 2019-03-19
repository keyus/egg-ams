'use strict';

const Controller = require('egg').Controller;

const indexRule={
    username: 'string',
    password: 'string',
}

/**
 * 登录，身份验证
 */
class AuthController extends Controller {
    async create() {
        const {ctx} = this;
        const {body} = ctx.request;
        ctx.validate(indexRule, body);
        const user = await ctx.service.admin.auth.check(body);
        if(user){
            ctx.body = {
                ...user,
                code: 200,
            };
            ctx.status = 200;
        }else{
            ctx.body = {
                code: -1,
                message: '用户名或密码错误'
            };
            ctx.status = 200;
        }
    }

}

module.exports = AuthController;
