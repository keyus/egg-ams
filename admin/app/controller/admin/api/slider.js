'use strict';

const BaseController = require('../base');

/**
 * 轮播图
 */
class SliderController extends BaseController {
    async index() {
        const {ctx} = this;
        const data = await this.myService.all();
        ctx.body = {
            data,
            code: 200,
        }
        ctx.status = 200;
    }
    async create(){
        const {ctx} = this;

        const body = ctx.request.body;
        const res = await this.myService.insert(body);
        ctx.body = {
            data: res.affectedRows ===1 ? true : false,
            code: res.affectedRows ===1 ? 200 : -1,
            message: res.affectedRows ===1 ? '添加成功' : '添加失败',
        }
        ctx.status = 200;
    }
    async update(){
        const {ctx} = this;
        const body = ctx.request.body;
        const res = await this.myService.update(body);
        ctx.body = {
            data: res.affectedRows ===1 ? true : false,
            code: res.affectedRows ===1 ? 200 : -1,
            message: res.affectedRows ===1 ? '更新成功' : '更新失败',
        }
        ctx.status = 200;
    }
    async destroy(){
        const {ctx} = this;
        this.ctx.validate({
            id: { type: 'string' },
        },ctx.params);
        const id = ctx.params.id;
        const res = await this.myService.destroy(id);
        ctx.body = {
            data: res.affectedRows ===1 ? true : false,
            code: res.affectedRows ===1 ? 200 : -1,
            message: res.affectedRows ===1 ? '删除成功' : '删除失败',
        }
        ctx.status = 200;
    }
}

module.exports = SliderController;
