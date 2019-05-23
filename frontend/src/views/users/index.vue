<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" @click="openAdd">新增管理</a-button>
            </a-button-group>
        </div>
        <a-table :columns="columns"
                 :rowKey="item => item.id"
                 :dataSource="data"
                 :pagination="false"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
                 @change="handleTableChange"
        >
            <template slot="role" slot-scope="role">
                {{role | role}}
            </template>
            <template slot="handler" slot-scope="item">
                <div class="handler" v-if="!item.role">
                    <a-button shape="circle" icon="edit" @click="openEdit(item)" />
                    <a-button shape="circle" icon="delete" @click="deleteUser(item)" />
                </div>
            </template>
        </a-table>
        <!--添加-->
        <Add :visible.sync="addVisible"
             @put="update"/>
        <!--编辑-->
        <Edit :visible.sync="visible"
              @put="update"
              :data="editObject"/>
    </div>
</template>
<script>
    import {columns} from './columns'
    import Add from './add'
    import Edit from './edit'
    export default {
        name: 'users',
        components:{
            Add,
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
                addVisible: false,

                editObject: {},
            }
        },
        mounted() {
            this.fetch();
        },
        methods: {
            async fetch(){
                this.loading = true;
                try{
                    const res = await this.$http.get('/user');
                    this.data = res.data;
                    this.loading = false;
                }catch (e) {
                    this.loading = false;
                }
            },
            onSelectChange (selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys
            },
            handleTableChange(pagination) {
                const pager = {...this.pagination};
                pager.current = pagination.current;
                this.pagination = pager;
            },
            openEdit(item){
                this.visible = true;
                this.editObject =  item;
            },
            openAdd(){
                this.addVisible = true;
            },
            update(){
                this.fetch();
            },
            async deleteUser(item){
                const _this = this;
                this.$confirm({
                    title: '确认删除?',
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    async onOk() {
                        try{
                            await _this.$http.delete(`/user/${item.id}`);
                            _this.fetch();
                        }catch (e) {
                            _this.loading = false;
                        }
                    },
                });

            }
        },
        filters:{
            role(val){
                if(val === 1) return '超级管理员';
                return '普通管理员'
            }
        }
    }
</script>
