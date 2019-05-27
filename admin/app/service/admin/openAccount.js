'use strict';

const BaseService = require('../base');


class OpenAccountService extends BaseService {
    async list(query) {
        const { name } = query;
        const page = Number(query.page || 1);
        const size = Number(query.size || 10);
        let where = '';
        let whereCount = '';
        if(name) {
            whereCount = `where name = "${name}"`;
            where = `where a.name = "${name}"`;
        }
        const count = await this.sql.query(`select count(id) from ${this.table} ${whereCount}`);
        const sql = `
                select a.*, b.name as platformName from ${this.table} as a 
                left join ${this.tablePrefix}platform as b
                on a.platformId = b.id
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
    //删除
    async deleteRow({id}){
        const contentTable = `${this.tablePrefix}content`;
        const sql = await this.sql.beginTransaction();
        try {
            const res = await sql.get(this.table, {id});
            if(res.content_id) await sql.delete(contentTable,{id: res.content_id})
            await sql.delete(this.table,{id})
            return await sql.commit();
        } catch (err) {
            await sql.rollback();
            throw err;
            return false;
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
    async update(query){
        const {
            id,
            status,
            note,
            account,
        } = query;
        const find = await this.sql.get(this.table,{id});
        if(!find || find.status !== 0 ) return {code: -1, message: '参数错误'};

        const conn = await this.sql.beginTransaction();
        try{
            //处理->开户成功
            if(status === 1){
                //是否已有会员绑定此账号
                const findAccount = await conn.get(`${this.tablePrefix}memberTraderAccount`,{
                    account,
                    platformId: find.platformId,
                })
                if(findAccount) return {code: -1, message: '该交易账号已被绑定,请检查交易账号是否输入有误!'};

                //更新会员交易账号状态
                await conn.update(`${this.tablePrefix}member`, {
                    hasAccount: 1,
                }, {where: {id: find.memberId}});
                //为会员创建交易账号记录
                await conn.insert(`${this.tablePrefix}memberTraderAccount`, {
                    account,
                    platformId: find.platformId,
                    memberId: find.memberId,
                    accountName: find.name,
                })
            }
            //更新开户记录状态
            await conn.update(this.table,{
                status,
                note,
            }, { where: { id } });
            await conn.commit();
        }catch (e) {
            console.log('error:',e)
            await conn.rollback();
            throw e;
            return { code: -1, message: '处理失败，请重试' }
        }
        return { code: 200 }

    }
}

module.exports = OpenAccountService;
