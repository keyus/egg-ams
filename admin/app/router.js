'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/io', controller.admin.home.index);
    router.resources('auth', '/api/auth',controller.admin.api.auth);    //登陆身份验证
    router.resources('user', '/api/user',controller.admin.api.user);    //管理员
    router.resources('cat', '/api/cat',controller.admin.api.cat);      //分类
};
