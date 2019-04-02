'use strict';

const Controller = require('egg').Controller;

class UploadController extends Controller {
    async create() {
        const {ctx} = this;
        const imgs = ctx.helper.saveFiles(ctx.request.files);
        ctx.body = {
            errno: imgs.length ? 0 : -1,
            data: imgs,
        };
    }
}

module.exports = UploadController;
