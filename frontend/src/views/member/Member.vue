<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" @click="openAdd"/>
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
                 :locale="{
                    emptyText: '暂无记录',
                 }"
        >
            <template slot="handler" slot-scope="item">
                <div class="handler">
                    <a-button shape="circle" icon="edit" @click="openEdit(item)"/>
                </div>
            </template>
            <template slot="isBindPay" slot-scope="item">
                <a-icon type="check" v-if="item"/>
                <span v-else>--</span>
            </template>
            <template slot="hasAccount" slot-scope="item">
                <a-icon type="check" v-if="item"/>
                <span v-else>--</span>
            </template>
            <template slot="status" slot-scope="item">
                <span v-if="item" style="color: forestgreen">正常</span>
                <span v-else>停用</span>
            </template>
        </a-table>
        <!--添加-->
        <Add :visible.sync="addVisible"
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
    import Edit from './edit'

    export default {
        name: 'member',
        components: {
            Add,
            Edit,
        },
        data() {
            return {
                data: [],
                pagination: {
                    total: 0,
                    current: 1,
                    size: '10',
                    showTotal: (total)=>`共${total}条记录`,
                },
                loading: false,
                columns,
                selectedRowKeys: [],

                visible: false,
                addVisible: false,
                editObject: {},
                total: 0,
                phone: undefined,
                status: ''
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
            query(){
                return {
                    phone: this.phone,
                    status: this.status,
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
                    const res = await this.$http.get('/member',{
                        params: this.query,
                    });
                    this.data = res.data.list;
                    this.pagination.total = res.data.total;
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                }
            },
            openEdit(item){
                this.visible = true;
                this.editObject =  item;
            },
            openAdd(){
                this.addVisible = true;
            },
            reset(){
                this.phone = '';
                this.status = '';
                this.fetch();
            }
        },
    }
</script>
