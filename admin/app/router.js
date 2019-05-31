'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    const checkToken = app.middleware.auth();
    const authWeb = app.middleware.authWeb();
    router.get('/io', controller.admin.home.index);

    //web api
    router.post('/api/webUser', authWeb, controller.frontend.api.member.user);                          //获取登陆会员信息
    router.post('/api/userAccount', authWeb, controller.frontend.api.member.userAccount);               //获取登陆会员交易账号
    router.post('/api/userMoneyDetails', authWeb, controller.frontend.api.member.userMoneyDetails);     //获取登陆会员资金明细
    router.post('/api/setPay/:key', authWeb, controller.frontend.api.member.setPay);                    //会员更新收款方式 [key: payType, alipay, bank]
    router.post('/api/webIdCardAuth', authWeb, controller.frontend.api.member.webIdCardAuth);           //会员实名认证
    router.post('/api/readIdCardAuth', authWeb, controller.frontend.api.member.readIdCardAuth);          //读取会员实名认证资料
    router.post('/api/webLogin', controller.frontend.api.member.login);                                 //会员登陆
    router.post('/api/webPlatform', controller.frontend.api.member.platform);                           //获取平台


    //后台api
    router.resources('auth', '/api/auth',controller.admin.api.auth);                                    //登陆身份验证
    router.resources('content', '/api/content',controller.admin.api.content);                           //内容
    router.resources('user', '/api/user',checkToken,controller.admin.api.user);                         //管理员
    router.resources('cat', '/api/cat',checkToken,controller.admin.api.cat);                            //分类
    router.resources('moneyDetails', '/api/moneyDetails',checkToken,controller.admin.api.moneyDetails); //资金明细
    router.resources('platform', '/api/platform',checkToken,controller.admin.api.platform);             //交易商
    router.resources('platformProduct', '/api/platformProduct',checkToken,controller.admin.api.platformProduct);     //交易品种
    router.resources('member', '/api/member',checkToken,controller.admin.api.member);                   //会员
    router.resources('memberTraderAccount', '/api/memberTraderAccount',checkToken,controller.admin.api.memberTraderAccount);           //会员交易账号
    router.resources('article', '/api/article',checkToken,controller.admin.api.article);                //文章
    router.resources('openAccount', '/api/openAccount',checkToken,controller.admin.api.openAccount);    //开户记录
    router.resources('withdraw', '/api/withdraw',checkToken,controller.admin.api.withdraw);             //提现记录
    router.resources('idCardAuth', '/api/idCardAuth',checkToken,controller.admin.api.idCardAuth);       //实名认证
    router.post('/api/articles', checkToken, controller.admin.api.article.destroyMore);                 //文章删除多条
    router.resources('upload', '/api/upload',controller.admin.api.upload);                              //上传
    router.resources('site', '/api/site',controller.admin.api.site);                                    //设置
    router.resources('friendlink', '/api/friendlink',controller.admin.api.friendlink);                  //友情链接
    router.resources('slider', '/api/slider',controller.admin.api.slider);                              //轮播图
};
