'use strict';

const BaseController = require('../base');

/**
 * 资金明细
 */
class MoneyDetailsController extends BaseController {
    async index() {
        const {ctx} = this;
        const data = await this.myService.list(ctx.request.query);
        ctx.body = data;
        ctx.status = 200;
    }
    async create(){
        const {ctx} = this;
        const body = ctx.request.body;
        ctx.validate({
            memberId: 'number',
            memberPhone: 'string',
            entryType: 'number',
            money: 'string',
            moneyDate: 'string',
            note: 'string',
        },body);
        const res = await this.myService.create(body);
        ctx.body = res;
        ctx.status = 200;
    }
}

module.exports = MoneyDetailsController;
