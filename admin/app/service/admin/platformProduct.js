'use strict';

const BaseService = require('../base');


class PlatformProductService extends BaseService {
    async list(query) {
        if(query.platformId)
        {
            return await this.sql.select(this.table,{
                where: {
                    platformId: query.platformId
                }
            });
        }
        return null;
    }

    //删除
    async deleteRow({id}){
        return await this.sql.delete(this.table,{id});
    }
    async update(data){
        const res = await this.sql.update(this.table,{
            productName: data.productName,
            diff: data.diff,
            maxNums: data.maxNums,
            buyFree: data.buyFree,
            sellFree: data.sellFree,
        },{
            where: {
                id: data.id,
            }
        });
        if(res.affectedRows === 1){
            return {
                code: 200,
                data: res,
            }
        }
        return {
            code: -1,
            message: '修改失败'
        }
    }
    async create(data){
        const res = await this.sql.insert(this.table,{
            ...data,
        });
        if(res.affectedRows === 1){
            return {
                code: 200,
                data: res,
            }
        }
        return {
            code: -1,
            message: '添加失败'
        }
    }
}

module.exports = PlatformProductService;
