export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '80px',
}, {
    title: '手机号',
    dataIndex: 'phone',
    width: '100px',
},{
    title: '身份证号',
    dataIndex: 'idCard',
    width: '130px',
},{
    title: '收款账户',
    dataIndex: 'isBindPay',
    width: '100px',
    align: 'center',
    scopedSlots: {customRender: 'isBindPay'}
},{
    title: '交易账号',
    dataIndex: 'hasAccount',
    width: '100px',
    align: 'center',
    scopedSlots: {customRender: 'hasAccount'}
},{
    title: '真实姓名',
    dataIndex: 'name',
    width: '100px',
},{
    title: '当前佣金',
    dataIndex: 'money',
    width: '150px',
},{
    title: '账号状态',
    dataIndex: 'status',
    width: '100px',
    align: 'center',
    scopedSlots: {customRender: 'status'}
},{
    title: '注册时间',
    dataIndex: 'create_time',
    width: '100px',
},{
    title: '操作',
    width: '200px',
    scopedSlots: {customRender: 'handler'}
},];
