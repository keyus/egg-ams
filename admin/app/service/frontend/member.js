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
    //获取资金明细
    async userMoneyDetails(token,body){
        const decode = jwt.decode(token);
        if (!decode) {
            return {
                code: -1,
                message: '非法访问'
            }
        }
        //最大查询3个月范围
        const endDate = body.startDate || moment().endOf('day').format(formatDate);
        const startDate = body.endDate || moment().subtract(3, 'M').startOf('day').format(formatDate);
        const page = body.page || 1;
        const platformId = body.platformId;
        const size = 10;
        const { memberId } = decode.data;
        const type = Number(body.type);
        const platformCountWhere = platformId ? `and platformId = ${platformId}` : '';
        const platformWhere = platformId ? `and a.platformId = ${platformId}` : '';
        const count = await this.sql.query(`select count(id) from ${this.tablePrefix}moneyDetails where memberId = ${memberId} and type = ${type} ${platformCountWhere} and create_time between '${startDate}' and '${endDate}' `);
        const sql = `
                        select a.*, b.name as platformName, c.accountName
                        from ${this.tablePrefix}moneyDetails as a
                        left join ${this.tablePrefix}platform as b
                        on a.platformId = b.id
                        left join ${this.tablePrefix}memberTraderAccount as c
                        on a.account = c.account 
                        where a.memberId = ${memberId}
                        ${platformWhere}
                        and a.type = ${type}
                        and a.moneyDate between '${startDate}' and '${endDate}'
                        order by a.moneyDate desc
                        limit ${page * size - size},${size}
                    `
        const res = await this.sql.query(sql);
        return {
            code: 200,
            data: res,
            page,
            size,
            total: count[0]['count(id)'],
        }
    }

}

module.exports = MemberService;
