'use strict';

const BaseService = require('../base');


class ArticleService extends BaseService {
    async list(query) {
        const keywords = query.keywords;
        delete query.keywords;
        if(keywords){
            /^\d+$/.test(keywords) ? query.id = keywords : query.title = keywords;
        }
        let where = '';
        Object.keys(query).forEach(key=>{
            if(key === 'title'){
                where += `and ${key} like "%${query[key]}%"`
            }else{
                where += `and ${key} = ${query[key]} `;
            }
        })
        if(where) where = `where ${where.substr(4)}`;
        const sql = `select id,title,author,fromto,intro,cat_id,content_id,hot,top,keywords,sorter,update_time from ${this.table} ${where} order by sorter desc`;
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

    //删除多条
    async deleteMore(ids){
        const contentTable = `${this.tablePrefix}content`;
        const sql = await this.sql.beginTransaction();
        const inids = `(${ids.toString()})`
        try {
            const res = await sql.query(`select id,content_id from ${this.table} where id in ${inids}`);
            let cids = res.filter(it=>it.content_id).map(it=>it.content_id);
            cids = `(${cids.toString()})`;
            await sql.query(`delete from ${this.table} where id in ${inids}`);
            await sql.query(`delete from ${contentTable} where id in ${cids}`);
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

module.exports = ArticleService;
