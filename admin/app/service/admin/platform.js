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
        return await this.sql.delete(this.table,{id});
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
