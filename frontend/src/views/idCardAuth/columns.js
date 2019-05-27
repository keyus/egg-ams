export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '80px',
},{
    title: '申请时间',
    dataIndex: 'create_time',
    scopedSlots: {customRender: 'create_time'},
    width: '200px',
},{
    title: '会员账号',
    dataIndex: 'memberPhone',
    width: '150px',
},{
    title: '实名',
    dataIndex: 'name',
    width: '150px',
},{
    title: '身份证号码',
    dataIndex: 'idCard',
    width: '200px',
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
    title: '身份证照片1',
    dataIndex: 'idCardImg1',
    width: '150px',
    scopedSlots: {customRender: 'idCardImg1'},
},{
    title: '身份证照片2',
    dataIndex: 'idCardImg2',
    width: '150px',
    scopedSlots: {customRender: 'idCardImg2'},
},{
    title: '手持身份证照片',
    dataIndex: 'idCardHandImg',
    width: '150px',
    scopedSlots: {customRender: 'idCardHandImg'},
},{
    title: '操作',
    scopedSlots: {customRender: 'handler'},
    width: '100px',
    fixed: 'right',
},];
