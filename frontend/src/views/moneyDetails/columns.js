export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '80px',
},{
    title: '日期',
    dataIndex: 'moneyDate',
    width: '150px',
    scopedSlots: {customRender: 'moneyDate'}
},{
    title: '类型',
    dataIndex: 'type',
    width: '100px',
    scopedSlots: {customRender: 'type'}
}, {
    title: '会员手机号',
    width: '180px',
    dataIndex: 'memberPhone',
},{
    title: '入账类型',
    width: '150px',
    dataIndex: 'entryType',
    scopedSlots: {customRender: 'entryType'}
},{
    title: '金额',
    width: '150px',
    scopedSlots: {customRender: 'money'}
},{
    title: '交易商',
    dataIndex: 'platformName',
    width: '200px',
},{
    title: '交易账号',
    dataIndex: 'account',
    width: '150px',
},{
    title: '状态',
    dataIndex: 'status',
    width: '100px',
    scopedSlots: {customRender: 'status'}
},{
    title: '交易品种集',
    dataIndex: 'tradeProduct',
    width: '300px',
},{
    title: '备注',
    dataIndex: 'note',
    width: '200px',
},{
    title: '操作',
    width: '100px',
    scopedSlots: {customRender: 'handler'}
},];
