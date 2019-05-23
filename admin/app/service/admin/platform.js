'use strict';

const BaseService = require('../base');


class PlatformService extends BaseService {
    async list() {
        return await this.sql.select(this.table,{
            orders: [['sorter','desc']]
        });
    }

    //删除
    async deleteRow({id}){
        const conn = await this.sql.beginTransaction(); // 初始化事务
        try {
            await conn.delete(`${this.tablePrefix}platformProduct`, {
                platformId: id,
            });
            await conn.delete(this.table, {id });
            await conn.commit(); // 提交事务
            return {
                code: 200,
            };
        } catch (err) {
            // error, rollback
            await conn.rollback(); // 一定记得捕获异常后回滚事务！！
            throw err;
        }
        return {
            code: -1,
            message: '删除失败'
        };
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
        return await this.sql.insert(this.table,{
            ...data,
        });
    }
}

module.exports = PlatformService;
