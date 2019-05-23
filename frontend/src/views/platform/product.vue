<template>
    <a-drawer
            :title="title"
            placement="right"
            :closable="false"
            @close="onClose"
            width="850px"
            :visible="visible"
    >
        <a-table :columns="columns"
                 :rowKey="record => record.id"
                 :dataSource="list"
                 :pagination="false"
                 :loading="loading"
        >
            <template v-for="col in ['productName','diff','maxNums','buyFree','sellFree']" :slot="col" slot-scope="text, record, index">
                <div :key="col">
                    <a-input
                            v-if="record.editable"
                            style="margin: -5px 0"
                            :value="text"
                            @change="e => handleChange(e.target.value, record.key, col)"
                    />
                    <template v-else>{{text}}</template>
                </div>
            </template>
            <template slot="operation" slot-scope="text, record, index">
                <div class='editable-row-operations'>
                    <span v-if="record.editable">
                      <a @click="() => save(record.key)" style="margin-right: 15px">保存</a>
                      <a-popconfirm title='取消编辑?' @confirm="() => cancel(record.key)">
                        <a>取消</a>
                      </a-popconfirm>
                    </span>
                    <span v-else>
                      <a @click="() => edit(record.key)">编辑</a>
                      <a style="margin-left: 15px" @click="() => deleteRow(record.key)">删除</a>
                    </span>
                </div>
            </template>

        </a-table>
    </a-drawer>

</template>

<script>
    const columns = [{
        title: '交易品种名称',
        dataIndex: 'productName',
        width: '180px',
        scopedSlots: {customRender: 'productName'}
    }, {
        title: '点差',
        dataIndex: 'diff',
        width: '100px',
        scopedSlots: {customRender: 'diff'}
    }, {
        title: '最大交易量',
        dataIndex: 'maxNums',
        width: '120px',
        scopedSlots: {customRender: 'maxNums'}
    }, {
        title: '买入手续费',
        dataIndex: 'buyFree',
        width: '120px',
        scopedSlots: {customRender: 'buyFree'}
    }, {
        title: '卖出手续费',
        dataIndex: 'sellFree',
        width: '120px',
        scopedSlots: {customRender: 'sellFree'}
    },{
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
    }]
    export default {
        name: 'product',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            data: {
                type: Object,
            }
        },
        watch: {
            visible(val) {
                if (val) {
                    this.fetch();
                }
            }
        },
        computed: {
            title() {
                return `${this.data.name} - 交易品种`
            }
        },
        data() {
            return {
                list: [],
                cacheData:[],
                columns,
                loading: false,
            }
        },
        methods: {
            onClose() {
                this.$emit('update:visible', false);
            },
            handleChange (value, key, column) {
                const newData = [...this.list]
                const target = newData.filter(item => key === item.key)[0]
                if (target) {
                    target[column] = value
                    this.list = newData
                }
            },
            edit (key) {
                const newData = [...this.list]
                const target = newData.filter(item => key === item.key)[0]
                if (target) {
                    target.editable = true
                    this.list = newData
                }
            },
            deleteRow(key){
                const newData = [...this.list]
                const target = newData.filter(item => key === item.key)[0];
                if (target) {
                    const _this = this;
                    this.$confirm({
                        title: '确认删除交易品种?',
                        okText: '确认',
                        okType: 'danger',
                        cancelText: '取消',
                        async onOk() {
                            try {
                                await _this.$http.delete(`/platformProduct/${target.id}`);
                                _this.fetch();
                            } catch (e) {
                                _this.loading = false;
                            }
                        },
                    });
                }
            },
            cancel (key) {
                const newData = [...this.list]
                const target = newData.filter(item => key === item.key)[0]
                if (target) {
                    Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
                    delete target.editable
                    this.list = newData
                }
            },
            async save (key) {
                const newData = [...this.list]
                const target = newData.filter(item => key === item.key)[0]
                if (target) {
                    try {
                        await this.$http.put(`/platformProduct/${target.id}`,{
                            id: target.id,
                            productName: target.productName,
                            diff: target.diff,
                            maxNums: target.maxNums,
                            buyFree: target.buyFree,
                            sellFree: target.sellFree,
                        })
                        this.$message.success('更新成功')
                    }catch (e) {

                    }
                    delete target.editable
                    this.list = newData;
                    this.cacheData = newData.map(item => ({ ...item }))
                }
            },
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/platformProduct', {
                        params: {
                            platformId: this.data.id,
                        }
                    })
                    this.cacheData = res.data.map(item=>({...item}));
                    this.list = res.data;
                    this.loading = false;
                } catch (e) {
                    this.loading = false;
                }
            },

        },
    }
</script>
