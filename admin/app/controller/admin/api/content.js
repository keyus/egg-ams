'use strict';

const BaseController = require('../base');

//内容
class ContentController extends BaseController {
    async show() {
        const {ctx} = this;
        console.log('ctx.params',ctx.params.id)
        const data = await this.myService.getOne(ctx.params.id);
        ctx.body = {
            data,
            code: 200,
        }
        ctx.status = 200;
    }
}

module.exports = ContentController;
