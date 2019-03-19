'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    nunjucks: {
        enable: true,
        package: 'egg-view-nunjucks',
    },
    mysql: {
        enable: true,
        package: 'egg-mysql',
    },
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    validate: {
        enable: true,
        package: 'egg-validate',
    }
};

