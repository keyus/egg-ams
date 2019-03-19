'use strict';
const BaseService = require('../base');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const genToken =(data,sign)=>{
    return jwt.sign(
        { data },
        sign,
        {
            expiresIn: '2 days'
        }
    )
}

class AuthService extends BaseService {
    //查询用户是否存在
    async check({username,password}) {
        const user = await this.sql.get('pme_user',{
            username,
            password: md5(password),
            use: 1
        });
        if(user){
            const token = genToken({username},this.config.tokenSign);
            user && delete user.password;
            return {
                user,
                token,
            }
        }
        return null;
    }
}

module.exports = AuthService;
