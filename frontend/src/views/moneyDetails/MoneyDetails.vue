<template>
    <div class="page">
            <div class="search-form" style="margin-bottom: 20px">
                <span>会员手机号：</span>
                <a-input placeholder="搜索手机号"
                         v-model="query.memberPhone"
                         @keyup.enter="fetch"
                         style="width: 180px;margin-right: 20px"/>
                <span>金额：</span>
                <a-input placeholder="金额"
                         v-model="query.money"
                         @keyup.enter="fetch"
                         style="width: 180px;margin-right: 20px"/>
                <span>交易账号：</span>
                <a-input placeholder="账号"
                         v-model="query.account"
                         @keyup.enter="fetch"
                         style="width: 180px;margin-right: 20px"/>
                <span>交易商：</span>
                <a-select v-model="query.platformId"
                          style="width: 180px;margin-right: 20px"
                          @change="fetch">
                    <a-select-option value="">全部</a-select-option>
                    <a-select-option :value="it.id" v-for="it in platform" :key="it.id">{{it.name}}</a-select-option>
                </a-select>
                <a-button type="primary" @click="fetch()">搜索</a-button>
                <a-button @click="reset()" style="margin-left: 15px">重置</a-button>
            </div>
        <a-table :columns="columns"
                 :rowKey="item => item.id"
                 :scroll="{x}"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 @change="handleTableChange"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
        >
            <template slot="type" slot-scope="item">
                <span v-if="item">收入</span>
                <span v-else>支出</span>
            </template>
            <template slot="entryType" slot-scope="item">
                <span v-if="item === 0">系统派送</span>
                <span v-if="item === 1">佣金入账</span>
                <span v-if="item === 2">提现</span>
            </template>
            <template slot="moneyDate" slot-scope="item">
                {{item | format}}
            </template>
            <template slot="money" slot-scope="item">
                <span v-if="item.entryType === 0 || item.entryType === 1" style="color: red">
                    +{{item.money|money}}
                </span>
                <span v-if="item.entryType === 2" style="color: forestgreen">-{{item.money|money}}</span>
            </template>
            <template slot="status" slot-scope="item">
                <span v-if="item">正常记账</span>
                <span v-else>已冻结</span>
            </template>
            <template slot="handler" slot-scope="item">
                <div class="handler">
                    <a href="javascript:;">冻结</a>
                </div>
            </template>
        </a-table>

    </div>
</template>
<script>
    import {columns} from './columns'
    import moment from 'moment'

    export default {
        name: 'MoneyDetails',
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
                total: 0,

                query: {
                    money: undefined,
                    memberPhone: undefined,
                    platformId: '',
                    account: undefined,
                },
                platform: []
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
        },
        created(){
            this.fetch();
            this.fetchPlatform();
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const params = {...this.query};
                    params.page = this.pagination.current;
                    params.size = this.pagination.size;
                    const res = await this.$http.get('/moneyDetails', {
                        params,
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
            reset() {
                this.query = {};
                this.fetch();
            },
        },
        filters: {
            format(val) {
                return moment(val).format('YYYY-MM-DD')
            }
        }
    }
</script>
