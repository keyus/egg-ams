/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    const config = {};
    config.keys = appInfo.name + '_1552628974233_7990';
    // config.middleware = ['auth'];
    //身份验证中间件
    // config.auth = {
    //     ignore: '/api/auth',
    // }
    config.multipart = {
        mode: 'file',
    };
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.html': 'nunjucks',
        },
    };
    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.cors = {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    };
    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '',
            database: 'pme',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };

    config.static={
        dir: path.join(appInfo.baseDir, '/public')
    }

    //配置
    const userConfig = {
        host: 'http://localhost:7002',
        tablePrefix: 'pme_',                       //表前缀
        tokenSign: 'eggCmsAdmin',                  //token签名
        uploadImgPath: '/public/upload/images'     //图片上传路径
    };
    return {
        ...config,
        ...userConfig,
    };
};
