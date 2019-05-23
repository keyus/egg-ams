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
            <template v-for="col in ['account']" :slot="col" slot-scope="text, record, index">
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
                    </span>
                </div>
            </template>
            <template slot="create_time" slot-scope="time">
                {{time|format}}
            </template>
        </a-table>
    </a-drawer>

</template>

<script>
    import moment from 'moment'

    const columns = [{
        title: '交易商',
        dataIndex: 'platformName',
    }, {
        title: '交易账号',
        dataIndex: 'account',
        scopedSlots: {customRender: 'account'}
    }, {
        title: '真实姓名',
        dataIndex: 'accountName',
    }, {
        title: '开户时间',
        dataIndex: 'create_time',
        scopedSlots: {customRender: 'create_time'}
    },{
        title: '操作',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
    }]
    export default {
        name: 'trader',
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
                return `${this.data.name} (${this.data.phone}) - 交易账号`
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
                        await this.$http.put(`/memberTraderAccount/${target.id}`,{
                            id: target.id,
                            account: target.account,
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
                    const res = await this.$http.get('/memberTraderAccount', {
                        params: {
                            id: this.data.id,
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
        filters: {
            format(val) {
                return moment(val).format('YYYY-MM-DD HH:mm:ss')
            }
        }
    }
</script>
