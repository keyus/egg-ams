export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '80px',
    fixed: 'left',
}, {
    title: '手机号',
    width: '180px',
    scopedSlots: {customRender: 'phone'},
    fixed: 'left',
},{
    title: '交易账号',
    width: '100px',
    dataIndex: 'hasAccount',
    align: 'center',
    scopedSlots: {customRender: 'hasAccount'}
},{
    title: '真实姓名',
    dataIndex: 'name',
    width: '100px',
},{
    title: '身份证号',
    dataIndex: 'idCard',
    width: '250px',
},{
    title: '当前佣金',
    dataIndex: 'money',
    width: '150px',
},{
    title: '支付宝收款账号',
    dataIndex: 'alipay',
    width: '200px',
},
    {
        title: '收款银行',
        width: '150px',
        dataIndex: 'bankName',
    },
    {
        title: '收款银行卡号',
        width: '220px',
        dataIndex: 'bankAccount',
    },
    {
        title: '收款银行开户行',
        width: '300px',
        dataIndex: 'bankAddress',
    },
    {
    title: '账号状态',
    dataIndex: 'status',
    width: '100px',
    align: 'center',
    scopedSlots: {customRender: 'status'}
},
    {
        title: '是否有提现记录',
        dataIndex: 'withdrawSuccess',
        width: '150px',
        align: 'center',
        scopedSlots: {customRender: 'withdrawSuccess'}
    },{
    title: '注册时间',
    dataIndex: 'create_time',
    width: '200px',
    scopedSlots: {customRender: 'create_time'}
},{
    title: '操作',
    width: '320px',
    scopedSlots: {customRender: 'handler'}
},];
