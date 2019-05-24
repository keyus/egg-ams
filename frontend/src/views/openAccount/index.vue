<template>
    <div class="page">
        <div class="search-form" style="margin-bottom: 20px">
            <a-input placeholder="搜索交易账号"
                     v-model="name"
                     @keyup.enter="fetch"
                     style="width: 180px;margin-right: 20px"/>
            <a-button type="primary"
                      style="margin-right: 20px"
                      @click="fetch">搜索</a-button>
            <a-button  @click="reset">重置</a-button>
        </div>
        <a-table :columns="columns"
                 :rowKey="record => record.id"
                 :dataSource="data"
                 :scroll="{x}"
                 :pagination="pagination"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
                 @change="handleTableChange"
        >
            <template slot="create_time" slot-scope="item">
                <span>{{item|date}}</span>
            </template>
            <template slot="status" slot-scope="item">
                <span v-if="item">已处理</span>
                <span v-else style="color: red">未处理</span>
            </template>
        </a-table>
    </div>
</template>
<script>
    import moment from 'moment'
    import {columns} from './columns'

    export default {
        name: 'openAccount',
        created() {
            this.fetch();
        },
        data() {
            return {
                data: [],
                pagination: {
                    total: 0,
                    current: 1,
                    size: '10',
                    showTotal: (total) => `共${total}条记录`,
                },
                loading: false,
                columns,
                name: undefined,
            }
        },
        computed: {
            x() {
                return this.columns.reduce((a, b) => {
                    if (typeof a === 'object' && a.width) {
                        return parseInt(a.width) + parseInt(b.width)
                    }
                    return a + parseInt(b.width)
                })
            },
            params(){
                return {
                    page: this.pagination.current,
                    size: this.pagination.size,
                    name: this.name,
                }
            }
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/openAccount', {
                        params: this.params,
                    });
                    this.data = res.data;
                    this.pagination.total = res.total;
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                }
            },
            handleTableChange(pagination) {
                const pager = {...this.pagination};
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch();
            },
            reset(){
                this.name = undefined;
                this.fetch()
            }
        },
        filters:{
            date(val){
                return moment(val).format('YYYY-MM-DD HH:mm:ss')
            }
        }

    }
</script>
