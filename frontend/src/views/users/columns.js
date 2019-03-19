export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '100px',
}, {
    title: '用户名',
    dataIndex: 'username',
    width: '10%',
}, {
    title: '昵称',
    dataIndex: 'nickname',
    width: '15%',
},{
    title: '类型',
    dataIndex: 'role',
    scopedSlots: { customRender: 'role' },
    width: '20%',
},{
    title: '备注',
    dataIndex: 'note',
},{
    title: '操作',
    scopedSlots: { customRender: 'handler' },
},];
