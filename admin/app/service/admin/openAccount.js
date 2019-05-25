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
    async update(body){
        const {
            id,
            status,
            note,
        } = body;
        const res = await this.sql.update(this.table,{
            status,
            note,
        }, { where: { id } })
        return {
            code: 200,
            data: res,
        }
    }
}

module.exports = OpenAccountService;
