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
        const {password, memberId} = decode.data;
        const startDate = moment().subtract(1, 'd').startOf('day').format(formatDate);
        const endDate = moment().subtract(1, 'd').endOf('day').format(formatDate);
        const user = await this.sql.get(`${this.tablePrefix}member`, {id: memberId});
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
        const md5password = md5(password);
        if (res && res.password === md5password ) {
            delete res.password;
            return {
                code: 200,
                data: res,
                token: genToken(
                    {
                        phone,
                        password: md5password,
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

    async setPay(token, body,params){
        const decode = jwt.decode(token);
        const { memberId } = decode.data;
        if(params === 'payType'){
            let {alipayActive, bankActive} = body;
            if(alipayActive) bankActive = 0;
            if(bankActive) alipayActive = 0;
            await this.sql.update(`${this.tablePrefix}member`,{alipayActive,bankActive}, {where: {id: memberId}})
        }
        if(params === 'alipay'){
            const {alipay} = body;
            await this.sql.update(`${this.tablePrefix}member`,{alipay}, {where: {id: memberId}})
        }
        if(params === 'bank'){
            const {bankCode,bankAccount,bankName,bankAddress} = body;
            await this.sql.update(`${this.tablePrefix}member`,{bankCode,bankAccount,bankName,bankAddress}, {where: {id: memberId}})
        }
        return {
            code: 200,
            data: 'ok'
        }

    }

    //实名认证
    async webIdCardAuth(token, body){
        const decode = jwt.decode(token);
        const { memberId, phone, } = decode.data;
        const {
            name,
            idCard,
            idCardImg1,
            idCardImg2,
            idCardHandImg,
        } = body;

        const find = await this.sql.get(`${this.tablePrefix}idCardAuth`,{
            memberId,
        })
        //认证中禁止修改
        if(find && find.status === 0) return {
            code: -1,
            message: '已有实名认证申请，请等候审核完成'
        }
        //已完成实名认证
        if(find && find.status === 1) return {
            code: -1,
            message: '已完成实名认证'
        }
        //不存在认证信息则创建新记录
        if(!find){
            const res = await this.sql.insert(`${this.tablePrefix}idCardAuth`,{
                name,
                memberId,
                memberPhone: phone,
                idCard,
                idCardImg1,
                idCardImg2,
                idCardHandImg,
            })
            if(res.affectedRows === 1){
                return {
                    code: 200,
                    data: res,
                }
            }
            return {
                code: -1,
                message: '提交失败请稍候再试'
            }
        }
        else{
            const res = await this.sql.update(`${this.tablePrefix}idCardAuth`,{
                name,
                memberId,
                memberPhone: phone,
                idCard,
                idCardImg1,
                idCardImg2,
                idCardHandImg,
                status: 0,
            },{
                where: {
                    id: find.id,
                }
            })
            if(res.affectedRows === 1){
                return {
                    code: 200,
                    data: res,
                }
            }
            return {
                code: -1,
                message: '提交失败请稍候再试'
            }
        }



    }
     //读取实名认证
    async readIdCardAuth(token){
        const decode = jwt.decode(token);
        const { memberId, } = decode.data;
        const res = await this.sql.get(`${this.tablePrefix}idCardAuth`,{
            memberId,
        })
        return {
            code: 200,
            data: res,
        }
    }

    //为自己开户
    async webOpenAccount(token,body){
        const decode = jwt.decode(token);
        const { memberId, phone} = decode.data;
        const {
            platformId,
            img1,
        } = body;
        //读取实名认证
        const idCard = await this.sql.get(`${this.tablePrefix}idCardAuth`,{
            memberId,
            status: 1,
        })
        if(!idCard) return {code: -1, message: '实名认证资料错误，请先完成实名认证'}

        const hasAccount = await this.sql.get(`${this.tablePrefix}openAccount`,{
            memberId,
            idCard: idCard.idCard,
            platformId,
            status: 1,
        })
        if(hasAccount) return {
            code: -1,
            message: '您在该交易商旗下已拥有交易账户，请更换交易商重试'
        }
        const isOpening = await this.sql.get(`${this.tablePrefix}openAccount`,{
            memberId,
            idCard: idCard.idCard,
            platformId,
            status: 0,
        })
        if(isOpening){
            return {
                code: -1,
                message: '有正在处理的开户审核，请勿重复提交'
            }
        }
        const res = await this.sql.insert(`${this.tablePrefix}openAccount`,{
            memberId,
            platformId,
            idCard: idCard.idCard,
            memberPhone: phone,
            name: idCard.name,
            img1,
        })
        return {
            code: 200,
            data: res,
        }
    }

    //为他人开户
    async webOpenAccountOther(token,body){
        const decode = jwt.decode(token);
        const { memberId, phone} = decode.data;
        const {
            name,
            idCard,
            platformId,
            idCardImg1,
            idCardImg2,
            bankImg1,
            idCardHandImg,
        } = body;
        const member = await this.sql.select(`${this.tablePrefix}member`,{
            memberId,
        })
        if(member.idCard === idCard) return {
            code: -1,
            message: '身份证信息与与账号主体实名认证身份ID相同请在[在线开户]功能页面完成提交'
        }
        const isOpening = await this.sql.get(`${this.tablePrefix}openAccount`,{
            idCard,
            platformId,
        })
        if(isOpening){
            if(isOpening.status === 0) return {
                code: -1,
                message: '正在处理此用户开户申请，请勿重复提交'
            }
            if(isOpening.status === 1) return {
                code: -1,
                message: '该用户已经在此交易商下开立交易账户，请更换开户人资料重新提交'
            }
        }
        const count = await this.sql.count(`${this.tablePrefix}openAccount`,{
            memberId,
            status: 0,
        })
        if(count > 10){
            return {
                code: -1,
                message: '正在处理中的开户申请已经达10位，请先等待客服处理完成，再重试'
            }
        }
        const res = await this.sql.insert(`${this.tablePrefix}openAccount`,{
            name,
            idCard,
            platformId,
            memberId,
            memberPhone: phone,
            idCardImg1,
            idCardImg2,
            bankImg1,
            idCardHandImg,
        })
        return {
            code: 200,
            data: res,
        }
    }

     //读取自己开户资料
    async readOpenAccount(token){
        const decode = jwt.decode(token);
        const { memberId ,} = decode.data;
        const find = await this.sql.get(`${this.tablePrefix}member`,{id: memberId});
        const idCard = find.idCard;
        const sql = `
            select a.*, b.name as platformName from ${this.tablePrefix}openAccount as a 
            left join ${this.tablePrefix}platform as b
            on a.platformId = b.id
            where a.memberId = ${memberId}
            and idCard = ${idCard}
        `;
        const res = await this.sql.query(sql);

        return {
            code: 200,
            data: res,
        }
    }

    //读取他人开户资料
    async readOpenAccountOther(token){
        const decode = jwt.decode(token);
        const { memberId ,} = decode.data;
        const find = await this.sql.get(`${this.tablePrefix}member`,{id: memberId});
        const memberIdCard = find.idCard;
        const sql = `
                        select a.*, b.name as platformName from ${this.tablePrefix}openAccount as a 
                        left join ${this.tablePrefix}platform as b 
                        on a.platformId = b.id
                        where a.memberId = ${memberId}
                        and a.idCard <> ${memberIdCard}
                        limit 0,20
                    `;
        const res = await this.sql.query(sql);
        return {
            code: 200,
            data: res,
        }
    }

    async updatePassword(token,body){
        const decode = jwt.decode(token);
        const { memberId} = decode.data;
        const {
            password,
            newPassword,
            confirmPassword,
        } = body;
        if(newPassword !== confirmPassword){
            return {
                code: -1,
                message: '新密码输入不一致'
            }
        }
        const find = await this.sql.get(`${this.tablePrefix}member`,{id: memberId});
        if(find.password !== md5(password)){
            return {
                code: -1,
                message: '原密码输入不正确'
            }
        }
        const res = await this.sql.update(`${this.tablePrefix}member`,{
            password: md5(newPassword),
        },{
            where: {
                id: memberId,
            }
        })
        if(res.affectedRows === 1){
            return {
                code: 200,
                message: '修改成功'
            }
        }
        return {
            code: -1,
            message: '修改失败,请稍候再试'
        }
    }
}

module.exports = MemberService;
