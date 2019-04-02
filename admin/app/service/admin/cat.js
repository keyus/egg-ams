'use strict';

const BaseService = require('../base');


class CatService extends BaseService {
    async list() {
        return await this.sql.select(this.table,{
            columns: ['id','name'],
            orders: [['sorter','desc']]
        });
    }
    //读取内容
    async listAll() {
        const contentTable = `${this.tablePrefix}content`;
        const sql = `select a.* ,b.content from ${this.table} as a left join ${contentTable} as b on a.content_id = b.id order by a.sorter desc`
        return await this.sql.query(sql);
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
    async update(data){
        const content = data.content;
        const contentTable = `${this.tablePrefix}content`
        delete data.content;

        if(data.content_id){
            await this.sql.update(contentTable,{
                id: data.content_id,
                content,
            })
        }else{
            if(content){
                const contentInsert = await this.sql.insert(contentTable,{ content });
                if(contentInsert){
                    data.content_id = contentInsert.insertId;
                }
            }
        }
        return await this.sql.update(this.table,data);
    }
    async create(data){
        let content_id = 0;
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
}

module.exports = CatService;
