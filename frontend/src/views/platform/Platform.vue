<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" @click="openAdd">新增交易商</a-button>
            </a-button-group>
        </div>
        <a-table :columns="columns"
                 :rowKey="item => item.id"
                 :scroll="{x}"
                 :dataSource="data"
                 :pagination="false"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
        >
            <template slot="name" slot-scope="item">
                <a href="javascript:;" @click="openProduct(item)">{{item.name}}</a>
            </template>
            <template slot="nav" slot-scope="item">
                <a-icon type="check" v-if="item"/>
                <a-icon type="close" v-else/>
            </template>
            <template slot="list" slot-scope="item">
                <a-icon type="check" v-if="item"/>
                <a-icon type="close" v-else/>
            </template>
            <template slot="banner" slot-scope="item">
                <a-icon type="check" v-if="item"/>
                <a-icon type="close" v-else/>
            </template>
            <template slot="content" slot-scope="item">
                <a-icon type="check" v-if="item"/>
                <a-icon type="close" v-else/>
            </template>
            <template slot="handler" slot-scope="item">
                <div class="handler">
                    <a href="javascript:;" @click="openEdit(item)" style="margin-right: 15px">编辑</a>
                    <a href="javascript:;" @click="openAddProduct(item)" style="margin-right: 15px">添加交易品种</a>
                    <a href="javascript:;" @click="deleteItem(item)">删除</a>
                </div>
            </template>
        </a-table>
        <!--交易品种-->
        <Product :visible.sync="productVisible"
                 :data="editObject"/>
        <!--添加-->
        <Add :visible.sync="addVisible"
             @put="update"/>
        <!--添加交易品种-->
        <AddProduct :visible.sync="addProductVisible"
                    :data="editObject"
                    @put="update"/>
        <!--编辑-->
        <Edit :visible.sync="visible"
              @put="update"
              :data="editObject"/>
    </div>
</template>
<script>
    import {columns} from './columns'
    import Product from './product'
    import Add from './add'
    import AddProduct from './addProduct'
    import Edit from './edit'

    export default {
        name: 'platform',
        components: {
            Product,
            Add,
            AddProduct,
            Edit,
        },
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
                selectedRowKeys: [],

                visible: false,
                productVisible: false,
                addVisible: false,
                addProductVisible: false,
                editObject: {},
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
            }
        },
        mounted() {
            this.fetch()
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/platform');
                    this.data = res.data;
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                }
            },
            openEdit(item) {
                this.editObject = item;
                this.visible = true;
            },
            openAddProduct(item) {
                this.editObject = item;
                this.addProductVisible = true;
            },
            openProduct(item) {
                this.editObject = item;
                this.productVisible = true;
            },
            openAdd() {
                this.addVisible = true;
            },
            update() {
                this.fetch();
            },
            async deleteItem(item) {
                const _this = this;
                this.$confirm({
                    title: '确认删除?',
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    async onOk() {
                        try {
                            await _this.$http.delete(`/platform/${item.id}`);
                            _this.fetch();
                        } catch (e) {
                            _this.loading = false;
                        }
                    },
                });
            }
        },
    }
</script>
