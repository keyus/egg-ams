<template>
    <div class="page">
        <div class="search">
            <a-button-group>
                <a-button type="primary" icon="delete" />
                <a-button type="primary" icon="plus" />
            </a-button-group>
            <div class="search-form">
                <a-input placeholder="文章ID/标题" style="width: 180px;margin-right: 20px"/>
                <a-select defaultValue="lucy" style="width: 180px;margin-right: 20px" handleChange="handleChange">
                    <a-select-option value="jack">Jack</a-select-option>
                    <a-select-option value="lucy">Lucy</a-select-option>
                    <a-select-option value="disabled" disabled>Disabled</a-select-option>
                    <a-select-option value="Yiminghe">yiminghe</a-select-option>
                </a-select>
                <a-button icon="search">搜索</a-button>
            </div>
        </div>
        <a-table :columns="columns"
                 :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
                 :rowKey="record => record.login.uuid"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
                 @change="handleTableChange"
        >
            <template slot="name" slot-scope="name">
                {{name.first}} {{name.last}}
            </template>
        </a-table>
    </div>
</template>
<script>
    import {columns} from './columns'
    export default {
        name: 'articleList',
        mounted() {
        },
        data() {
            return {
                data: [],
                pagination: {},
                loading: false,
                columns,
                selectedRowKeys: [],
            }
        },
        computed: {

        },
        methods: {
            onSelectChange (selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys
            },
            handleTableChange(pagination) {
                const pager = {...this.pagination};
                pager.current = pagination.current;
                this.pagination = pager;
            },
            fetch(params = {}) {

            }
        },
    }
</script>
