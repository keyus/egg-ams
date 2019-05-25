'use strict';

const BaseService = require('../base');


class WithdrawService extends BaseService {
    async list(query) {
        const { memberPhone } = query;
        const page = Number(query.page || 1);
        const size = Number(query.size || 10);
        let where = '';
        if(memberPhone) {
            where = `where memberPhone = "${memberPhone}"`;
        }
        const count = await this.sql.query(`select count(id) from ${this.table} ${where}`);
        const sql = `
                select * from ${this.table} 
                ${where}
                limit ${page * size - size},${size}
             `;
        const data = await this.sql.query(sql);
        return {
            code: 200,
            data,
            page,
            size,
            total: count[0]['count(id)'],
        }
    }

    async create(data){
        let content_id = null;
        const content = data.content;
        const contentTable = `${this.tablePrefix}content`
        delete data.content;

        if(content){
            const res = await this.sql.insert(contentTable,{
                content,
            })
            if(res.insertId) content_id = res.insertId;
        }
        return await this.sql.insert(this.table,{
            ...data,
            content_id
        });
    }

    //处理提现记录
    async update(query){
        const {
            id,
            status,
            money,
            note,
        } = query;
        const body = { code: -1, message: '参数错误',}
        if(!id || !status) return body;
        //查询需要处理的记录
        const find = await this.sql.get(this.table,{id});
        //禁止从提现成功,提现失败   状态切换到其它状态
        if(!find || find.status !== 0) return body;
        //如果需要切换到提现成功状态
        if(status === 1){
            //读取会员信息
            const member = await this.sql.get(`${this.tablePrefix}member`,{id: find.memberId});
            //存在会员
            if(member){
                //如果会员金额大于提现金额，则正常扣款
                if(member.money > money){
                    //更新会员返佣余额,以及重置提现锁定金额
                    await this.sql.update(`${this.tablePrefix}member`,{
                        money: Number(member.money) - Number(money),        //会员返佣余额扣款
                        withdrawMoney: 0,                                   //重置会员提现金额为0
                    },{where: {id: find.memberId}});
                    //新增资金明细提现记录
                    await this.sql.insert(`${this.tablePrefix}moneyDetails`,{
                        memberId: find.memberId,
                        memberPhone: member.phone,
                        money,
                        type: 1,
                        entryType: 2,
                        moneyDate: new Date(),
                        note: '提现成功',
                        status: 1,
                    })
                }else{
                    return {
                        code: -1,
                        message: '会员扣款失败,提现金额大于会员当前余额'
                    }
                }
            }
        }
        //更新提现记录状态
        const res = await this.sql.update(this.table, {
            status,
            note,
        },{ where: { id } });

        return {
            code: 200,
            data: res,
            message: '修改成功'
        }

    }
}

module.exports = WithdrawService;
