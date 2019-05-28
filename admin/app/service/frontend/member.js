'use strict';

const BaseService = require('../base');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const genToken = (data, sign) => {
    return jwt.sign(
        {data},
        sign,
        {
            expiresIn: '1 days'
        }
    )
}
const formatDate = 'YYYY-MM-DD HH:mm:ss';

class MemberService extends BaseService {
    //获取登陆用户信息
    async getLoginUser(token) {
        const decode = jwt.decode(token);
        if (!decode) {
            return {
                code: -1,
                message: '非法访问'
            }
        }
        const {phone, password} = decode.data;
        const startDate = moment().subtract(1, 'd').startOf('day').format(formatDate);
        const endDate = moment().subtract(1, 'd').endOf('day').format(formatDate);
        const user = await this.sql.get(`${this.tablePrefix}member`, {phone});
        const sql = `select sum(money) as money from ${this.tablePrefix}moneyDetails 
            where memberId = ${user.id} 
            and status = 1 
            and moneyDate between '${startDate}'
            and '${endDate}'
            `
        const yesterdayMoneyDetails = await this.sql.query(sql);
        user.yesterdayMoney = yesterdayMoneyDetails[0].money || 0;
        if (
            user &&
            user.password === password
        ) {
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

    //检测登陆用户
    async checkUser(body) {
        const {
            phone,
            password,
        } = body;
        const res = await this.sql.get(`${this.tablePrefix}member`, {phone});
        if (res && res.password === md5(password)) {
            delete res.password;
            return {
                code: 200,
                data: res,
                token: genToken(
                    {
                        phone,
                        password: md5(password),
                        memberId: res.id,
                        name: res.name,
                    },
                    this.config.webTokenSign
                )
            }
        }
        return {
            code: -1,
            message: '登录名或密码错误'
        };
    }

    //获取平台
    async platform() {
        const res = await this.sql.select(`${this.tablePrefix}platform`, {
            orders: [['sorter', 'desc']]
        });
        return {
            code: 200,
            data: res,
        }
    }

    //获取交易账号
    async userAccount(token, {type}) {
        const decode = jwt.decode(token);
        if (!decode) {
            return {
                code: -1,
                message: '非法访问'
            }
        }
        const {
            memberId,
            name,
        } = decode.data;
        const isOwn = type === 0 ? `accountName = '${name}'` : `accountName <> '${name}'` ;
        const sql = `
                        select a.id, a.account, a.accountName, a.create_time, b.name as platformName, b.rebateWeek
                        from ${this.tablePrefix}memberTraderAccount as a
                        left join ${this.tablePrefix}platform as b
                        on a.platformId = b.id
                        where memberId = ${memberId}
                        and ${isOwn}
                        order by create_time desc
                    `
        const res = await this.sql.query(sql);
        return {
            code: 200,
            data: res,
        }
    }
}

module.exports = MemberService;
