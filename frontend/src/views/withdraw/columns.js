export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '80px',
},{
    title: '会员账号',
    dataIndex: 'memberPhone',
    width: '150px',
},{
    title: '提现金额',
    dataIndex: 'money',
    width: '150px',
    scopedSlots: {customRender: 'money'}
},{
    title: '提现类型',
    dataIndex: 'type',
    width: '100px',
    scopedSlots: {customRender: 'type'}
},{
    title: '状态',
    dataIndex: 'status',
    width: '100px',
    scopedSlots: {customRender: 'status'},
},{
    title: '备注',
    dataIndex: 'note',
    width: '150px',
},{
    title: '发起时间',
    dataIndex: 'create_time',
    scopedSlots: {customRender: 'create_time'},
    width: '200px',
},{
    title: '操作',
    scopedSlots: {customRender: 'handler'},
    width: '100px',
},];
