'use strict';

const BaseService = require('../base');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const genToken =(data,sign)=>{
    return jwt.sign(
        { data },
        sign,
        {
            expiresIn: '1 days'
        }
    )
}
class MemberService extends BaseService {
    //获取登陆用户信息
    async getLoginUser(token){
        const decode = jwt.decode(token);
        if(!decode){
            return {
                code: -1,
                message: '非法访问'
            }
        }
        const {phone,password} = decode.data;
        const user = await this.sql.get(`${this.tablePrefix}member`,{phone});
        if(
            user &&
            user.password === password
        ){
            delete user.password;
            return {
                code: 200,
                data: user,
            }
        }
        return {
            code: -1,
            message: '用户名或密码错误,请重新登录!'
        }
    }
    async checkUser(body) {
        const {
            phone,
            password,
        } = body;
        const res = await this.sql.get(`${this.tablePrefix}member`,{phone});
        if(res && res.password === md5(password)){
            delete res.password;
            return {
                code: 200,
                data: res,
                token: genToken({phone, password: md5(password)},this.config.webTokenSign)
            }
        }
        return {
            code: -1,
            message: '登录名或密码错误'
        };
    }
}

module.exports = MemberService;
