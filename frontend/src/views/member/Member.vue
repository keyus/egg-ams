<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="plus" @click="openAdd"/>
            </a-button-group>
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
                },
                loading: false,
                columns,
                selectedRowKeys: [],

                visible: false,
                addVisible: false,
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
                    const res = await this.$http.get('/member');
                    this.data = res.data;
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
            update(){
                this.fetch();
            },
        },
    }
</script>
