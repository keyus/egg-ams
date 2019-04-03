<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary"
                          icon="delete"
                          :disabled="Boolean(!selectedRowKeys.length)"
                          @click="deleteMore" />
                <a-button type="primary"
                          icon="plus"
                          @click="openAdd" />
            </a-button-group>
            <div class="search-form">
                <a-input placeholder="文章ID/标题"
                         v-model="keywords"
                         @keyup.enter="fetchList"
                         style="width: 180px;margin-right: 20px"/>
                <a-select defaultValue=""
                          style="width: 180px;margin-right: 20px"
                          @change="catChange">
                    <a-select-option value="">选择分类</a-select-option>
                    <a-select-option :value="it.id"
                                     v-for="it in cat">{{it.name}}</a-select-option>
                </a-select>
                <a-select defaultValue=""
                          style="width: 180px;margin-right: 20px"
                          @change="hotChange">
                    <a-select-option value="">选择热门</a-select-option>
                    <a-select-option value="1">热门</a-select-option>
                    <a-select-option value="0">非热门</a-select-option>
                </a-select>
                <a-select defaultValue=""
                          style="width: 180px;margin-right: 20px"
                          @change="topChange">
                    <a-select-option value="">选择置顶</a-select-option>
                    <a-select-option value="1">置顶</a-select-option>
                    <a-select-option value="0">未置顶</a-select-option>
                </a-select>
                <a-button icon="search" @click="fetchList">搜索</a-button>
            </div>
        </div>
        <a-table :columns="columns"
                 :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
                 :rowKey="record => record.id"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
                 @change="handleTableChange"
        >
            <template slot="title" slot-scope="item">
                <span>{{item.title}}</span>
            </template>
            <template slot="cat_id" slot-scope="item">
                {{item|formatCat(cat)}}
            </template>
            <template slot="hot" slot-scope="item">
                <a-icon type="check" v-if="item" />
                <a-icon type="close" v-else/>
            </template>

            <template slot="top" slot-scope="item">
                <a-icon type="check" v-if="item" />
                <a-icon type="close" v-else/>
            </template>
            <template slot="handler" slot-scope="item">
                <div class="handler">
                    <a-button shape="circle" icon="edit" @click="openEdit(item)" />
                    <a-button shape="circle" icon="delete" @click="deleteItem(item)" />
                </div>
            </template>
        </a-table>

        <!--添加-->
        <Add :visible.sync="addVisible"
             :cat="cat"
             @put="update"/>
        <!--编辑-->
        <Edit :visible.sync="visible"
              :cat="cat"
              @put="update"
              :data="editObject"/>
    </div>
</template>
<script>
    import {columns} from './columns'
    import Add from './add'
    import Edit from './edit'
    export default {
        name: 'articleList',
        components:{
            Add,
            Edit,
        },
        mounted() {
            this.fetchCat();
            this.fetchList();
        },
        data() {
            return {
                cat: [],
                data: [],
                pagination: {
                    total: 0,
                    current: 1,
                    size: '10',
                },
                loading: false,
                columns,
                selectedRowKeys: [],

                cat_id: '',
                hot: undefined,
                top: undefined,
                keywords: '',

                visible: false,
                addVisible: false,
                editObject: {},
            }
        },
        computed: {

        },
        methods: {
            async fetchCat(){
                try{
                    const res = await this.$http.get('/cat');
                    this.cat = res.data;
                }catch (e) {}
            },
            async fetchList(){
                this.loading = true;
                try{
                    const res = await this.$http.get('/article',{params: {
                            cat_id: this.cat_id === '' ? undefined : this.cat_id,
                            hot: this.hot === '' ? undefined : this.hot,
                            top: this.top === '' ? undefined : this.top,
                            keywords: this.keywords,
                            page: this.pagination.current,
                            size: this.pagination.size,
                        }});
                    this.data = res.data.list;
                    this.pagination.total = res.data.total;
                    this.loading = false;
                }catch (e) {
                    this.loading = false;
                }
            },
            async deleteItem(item){
                const _this = this;
                this.$confirm({
                    title: '确认删除?',
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    async onOk() {
                        try{
                            await _this.$http.delete(`/article/${item.id}`);
                            _this.fetchList();
                        }catch (e) {
                        }
                    },
                });
            },
            async deleteMore(){
                const _this = this;
                this.$confirm({
                    title: `确认批量删除文章id[${this.selectedRowKeys.toString()}]?`,
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    async onOk() {
                        try{
                            await _this.$http.post(`/articles`,{ids: _this.selectedRowKeys});
                            _this.selectedRowKeys = [];
                            _this.fetchList();
                        }catch (e) {
                            console.warn(e)
                        }
                    },
                });
            },
            openEdit(item){
                this.visible = true;
                this.editObject =  item;
            },
            openAdd(){
                this.addVisible = true;
            },
            update(){
                this.fetchList();
            },
            onSelectChange (selectedRowKeys) {
                this.selectedRowKeys = selectedRowKeys
            },
            handleTableChange(pagination) {
                const pager = {...this.pagination};
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetchList();
            },
            catChange(val){
                this.cat_id = val;
                this.fetchList();
            },
            hotChange(val){
                this.hot = val;
                this.fetchList();
            },
            topChange(val){
                this.top = val;
                this.fetchList();
            }
        },
        filters:{
            formatCat(val,cat){
                if(Array.isArray(cat)){
                    const find = cat.find(it=>{
                        return it.id === Number(val);
                    });
                    if(find){
                        return find.name;
                    }
                }
                return val;
            }
        }
    }
</script>
