'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    const checkToken = app.middleware.auth();
    // router.get('/', controller.home.index);
    router.get('/io', controller.admin.home.index);
    router.resources('auth', '/api/auth',controller.admin.api.auth);                            //登陆身份验证
    router.resources('content', '/api/content',controller.admin.api.content);                   //内容
    router.resources('user', '/api/user',checkToken,controller.admin.api.user);                 //管理员
    router.resources('cat', '/api/cat',checkToken,controller.admin.api.cat);                    //分类
    router.resources('article', '/api/article',checkToken,controller.admin.api.article);        //文章
    router.post('/api/articles', checkToken, controller.admin.api.article.destroyMore);         //文章删除多条
    router.resources('upload', '/api/upload',controller.admin.api.upload);                      //上传
    router.resources('site', '/api/site',controller.admin.api.site);                            //设置
    router.resources('friendlink', '/api/friendlink',controller.admin.api.friendlink);          //友情链接
    router.resources('slider', '/api/slider',controller.admin.api.slider);                      //轮播图
};
