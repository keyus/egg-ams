<template>
    <div class="page">
        <div class="search-form" style="margin-bottom: 20px">
            <span>交易账号：</span>
            <a-input placeholder="搜索交易账号"
                     v-model="account"
                     @keyup.enter="fetch"
                     style="width: 180px;margin-right: 20px"/>
            <span>交易商：</span>
            <a-select v-model="platformId"
                      @change="fetch"
                      style="width: 180px;margin-right: 20px">
                <a-select-option value="">选择交易商</a-select-option>
                <a-select-option :value="it.id" v-for="it in platform" :key="it.id">{{it.name}}</a-select-option>
            </a-select>
            <a-button type="primary"
                      style="margin-right: 20px"
                      @click="fetch">搜索</a-button>
            <a-button  @click="reset">重置</a-button>
        </div>
        <a-table :columns="columns"
                 :rowKey="record => record.id"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
                 @change="handleTableChange"
        />

    </div>
</template>
<script>
    import {columns} from './columns'
    import Add from './add'
    import Edit from './edit'

    export default {
        name: 'memberTraderAccount',
        components: {
            Add,
            Edit,
        },
        created() {
            this.fetchPlatform();
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
                keywords: '',
                editObject: {},
                platform: [],
                account: undefined,
                platformId: '',
            }
        },
        computed: {
            params(){
                return {
                    page: this.pagination.current,
                    size: this.pagination.size,
                    account: this.account,
                    platformId: this.platformId,
                    platform: [],
                }
            }
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/memberTraderAccount', {
                        params: this.params,
                    });
                    this.data = res.data;
                    this.pagination.total = res.total;
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                }
            },
            async fetchPlatform() {
                try {
                    const res = await this.$http.get('/platform');
                    this.platform = res.data;
                } catch (e) {

                }
            },
            handleTableChange(pagination) {
                const pager = {...this.pagination};
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch();
            },
            reset(){
                this.account = undefined;
                this.platformId = '';
                this.fetch()
            }
        },

    }
</script>
