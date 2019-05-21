<template>
    <div class="page">
        <a-table :columns="columns"
                 :rowKey="item => item.id"
                 :scroll="{x}"
                 :dataSource="data"
                 :pagination="pagination"
                 :loading="loading"
                 :locale="{
                    emptyText: '暂无记录',
                 }"
        />
    </div>
</template>
<script>
    import {columns} from './columns'
    export default {
        name: 'member',
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
            x(){
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
                try{
                    const res = await this.$http.get('/member');
                    this.data = res.data;
                    this.loading = false;
                }catch (e) {
                    this.loading = false;
                }
            },
        },
    }
</script>
