<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" @click="openAdd" >注册会员</a-button>
            </a-button-group>
            <div class="search-form">
                <span>手机号：</span>
                <a-input placeholder="搜索手机号"
                         v-model="phone"
                         @keyup.enter="fetchList"
                         style="width: 180px;margin-right: 20px"/>
                <span>账号状态：</span>
                <a-select v-model="status"
                          style="width: 180px;margin-right: 20px"
                          @change="fetch">
                    <a-select-option value="">全部</a-select-option>
                    <a-select-option :value="1">正常</a-select-option>
                    <a-select-option :value="0">停用</a-select-option>
                </a-select>
                <a-button type="primary" @click="fetch()">搜索</a-button>
                <a-button @click="reset()" style="margin-left: 15px">重置</a-button>
            </div>
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
            <template slot="phone" slot-scope="item">

                <a href="javascript:;"
                   v-if="item.hasAccount"
                   @click="openTrader(item)">{{item.phone}}</a>
                <span v-else>{{item.phone}}</span>
            </template>
            <template slot="handler" slot-scope="item">
                <div class="handler">
                    <a href="javascript:;"  @click="openEdit(item)">编辑</a>
                    <a href="javascript:;"
                       v-if="item.idCard"
                       @click="openAddTradeAccount(item)"
                       style="margin-left: 15px">绑定交易账号</a>
                    <a href="javascript:;"
                       v-if="item.idCard && !item.withdrawSuccess"
                       @click="openAddPay(item)"
                       style="margin-left: 15px">编辑收款信息</a>
                </div>
            </template>
            <template slot="isBindPay" slot-scope="item">
                <span v-if="item">
                    <a-icon type="check" />
                </span>
                <span v-else>
                    --
                </span>
            </template>
            <template slot="withdrawSuccess" slot-scope="item">
                <span v-if="item">
                    <a-icon type="check" />
                </span>
                <span v-else>
                    --
                </span>
            </template>
            <template slot="hasAccount" slot-scope="item">
                <span v-if="item">
                    <a-icon type="check" />
                </span>
                <span v-else>
                    <label style="margin-right: 15px">--</label>
                </span>
            </template>
            <template slot="create_time" slot-scope="item">
                {{item | format}}
            </template>
            <template slot="status" slot-scope="item">
                <span v-if="item" style="color: forestgreen">正常</span>
                <span v-else>停用</span>
            </template>
        </a-table>
        <!--添加-->
        <Add :visible.sync="addVisible"
             @put="fetch"/>
        <!--交易账号-->
        <Trader :visible.sync="traderVisible"
                :data="editObject"/>
        <!--添加交易账号-->
        <AddTradeAccount :visible.sync="addTradeAccountVisible"
                         :data="editObject"
                         @put="fetch"/>
        <!--编辑收款账号-->
        <AddPay :visible.sync="addPayVisible"
                         :data="editObject"
                         @put="fetch"/>
        <!--编辑-->
        <Edit :visible.sync="visible"
              @put="fetch"
              :data="editObject"/>
    </div>
</template>
<script>
    import {columns} from './columns'
    import Add from './add'
    import Trader from './trader'
    import AddTradeAccount from './addTradeAccount'
    import AddPay from './addPay'
    import Edit from './edit'
    import moment from 'moment'

    export default {
        name: 'member',
        components: {
            Trader,
            Add,
            AddTradeAccount,
            AddPay,
            Edit,
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
                selectedRowKeys: [],

                visible: false,
                traderVisible: false,
                addVisible: false,
                addPayVisible: false,
                addTradeAccountVisible: false,
                editObject: {},
                total: 0,

                phone: undefined,
                status: '',
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
            query() {
                return {
                    phone: this.phone,
                    status: this.status,
                    page: this.pagination.current,
                    size: this.pagination.size,
                }
            }
        },
        mounted() {
            this.fetch()
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/member', {
                        params: this.query,
                    });
                    this.data = res.data.list;
                    this.pagination.total = res.data.total;
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
            openEdit(item) {
                this.visible = true;
                this.editObject = item;
            },
            openAdd() {
                this.addVisible = true;
            },
            openAddTradeAccount(item) {
                this.editObject = item;
                this.addTradeAccountVisible = true;
            },
            openAddPay(item) {
                this.editObject = item;
                this.addPayVisible = true;
            },
            reset() {
                this.phone = '';
                this.status = '';
                this.fetch();
            },
            async openTrader(item){
                this.editObject = item;
                this.traderVisible = true;
            }
        },
        filters: {
            format(val) {
                return moment(val).format('YYYY-MM-DD HH:mm:ss')
            }
        }
    }
</script>
