'use strict';

const BaseService = require('../base');

class IdCardAuthService extends BaseService {
    async list(query) {
        const {memberPhone} = query;
        const page = Number(query.page || 1);
        const size = Number(query.size || 10);
        let where = '';
        if (memberPhone) {
            where = `where memberPhone = "${memberPhone}"`;
        }
        const count = await this.sql.query(`select count(id) from ${this.table} ${where}`);
        const sql = `
                select * from ${this.table} 
                ${where}
                order by create_time desc
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

    async create(data) {
        let content_id = null;
        const content = data.content;
        const contentTable = `${this.tablePrefix}content`
        delete data.content;

        if (content) {
            const res = await this.sql.insert(contentTable, {
                content,
            })
            if (res.insertId) content_id = res.insertId;
        }
        return await this.sql.insert(this.table, {
            ...data,
            content_id
        });
    }

    //处理提现记录
    async update(query) {
        const {
            id,
            status,
            note,
            sex,
        } = query;
        const body = {code: -1, message: '参数错误',}
        //查询需要处理的记录
        const find = await this.sql.get(this.table, {id});
        //禁止从提现成功,提现失败   状态切换到其它状态
        if (!find || find.status !== 0) return body;
        //如果需要切换到认证成功,则需要更新会员账号，实名信息
        if (status === 1) {
            //读取会员信息
            const member = await this.sql.get(`${this.tablePrefix}member`, {id: find.memberId});
            await this.sql.update(`${this.tablePrefix}member`, {
                idCardImg1: find.idCardImg1,
                idCardImg2: find.idCardImg1,
                idCardHandImg: find.idCardHandImg,
                idCard: find.idCard,
                name: find.name,
                sex,
            }, {where: {id: member.id}})
        }
        //更新记录 认证成功或者认证失败
        const res = await this.sql.update(this.table, {
            status,
            note,
            sex,
        }, {where: {id}});

        return {
            code: 200,
            data: res,
            message: '修改成功'
        }

    }
}

module.exports = IdCardAuthService;
