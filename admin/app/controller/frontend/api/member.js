'use strict';
const Controller = require('egg').Controller;

/**
 * 会员
 */
class MemberController extends Controller {
    //登陆
    async login() {
        const {ctx} = this;
        const {body} = ctx.request
        ctx.validate({
            phone: 'string',
            password: 'string',
        },body);
        const data = await this.ctx.service.frontend.member.checkUser(body);
        ctx.body = data;
    }
    async user(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const data = await this.ctx.service.frontend.member.getLoginUser(token);
        ctx.body = data;
        ctx.status = data.code === 200 ? 200 : 401;
    }
    async platform(){
        const {ctx} = this;
        const data = await this.ctx.service.frontend.member.platform();
        ctx.body = data;
        ctx.status = 200;
    }
    //获取交易账号
    async userAccount(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const body = ctx.request.body;
        const data = await this.ctx.service.frontend.member.userAccount(token,body);
        ctx.body = data;
        ctx.status = 200;
    }
}

module.exports = MemberController;