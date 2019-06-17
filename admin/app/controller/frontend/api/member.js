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
    //获取用户信息
    async user(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const data = await this.ctx.service.frontend.member.getLoginUser(token);
        ctx.body = data;
        ctx.status = data.code === 200 ? 200 : 401;
    }
    //获取交易平台
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
    //获取资金明细
    async userMoneyDetails(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const body = ctx.request.body;
        const data = await this.ctx.service.frontend.member.userMoneyDetails(token,body);
        ctx.body = data;
        ctx.status = 200;
    }

    //获取资金明细
    async setPay(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        ctx.validate({key: ['payType','alipay','bank']}, ctx.params);
        const body = ctx.request.body;
        const data = await this.ctx.service.frontend.member.setPay(token,body,ctx.params.key);
        ctx.body = data;
        ctx.status = 200;
    }

    //实名认证
    async webIdCardAuth(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const body = ctx.request.body;
        ctx.validate({
            name: 'string',
            idCard: 'string',
            idCardImg1: 'string',
            idCardImg2: 'string',
            idCardHandImg: 'string',
        }, body);
        const data = await this.ctx.service.frontend.member.webIdCardAuth(token,body);
        ctx.body = data;
        ctx.status = 200;
    }

    //读取实名认证信息
    async readIdCardAuth(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const data = await this.ctx.service.frontend.member.readIdCardAuth(token);
        ctx.body = data;
        ctx.status = 200;
    }

    //为自己开户
    async webOpenAccount(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const body = ctx.request.body;
        const data = await this.ctx.service.frontend.member.webOpenAccount(token,body);
        ctx.body = data;
        ctx.status = 200;
    }
    //为他人开户
    async webOpenAccountOther(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const body = ctx.request.body;
        const data = await this.ctx.service.frontend.member.webOpenAccountOther(token,body);
        ctx.body = data;
        ctx.status = 200;
    }

    //读取自己的开户资料
    async readOpenAccount(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const data = await this.ctx.service.frontend.member.readOpenAccount(token);
        ctx.body = data;
        ctx.status = 200;
    }

    //读取他人的开户资料
    async readOpenAccountOther(){
        const {ctx} = this;
        const token = ctx.req.headers.authorization;
        const data = await this.ctx.service.frontend.member.readOpenAccountOther(token);
        ctx.body = data;
        ctx.status = 200;
    }

}

module.exports = MemberController;
