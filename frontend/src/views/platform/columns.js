export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '100px',
}, {
    title: '交易商名称',
    width: '150px',
    scopedSlots: {customRender: 'name'}
}, {
    title: '交易商LOGO',
    dataIndex: 'logo',
    width: '200px',
    scopedSlots: {customRender: 'nav'}
}, {
    title: '交易商网址',
    dataIndex: 'net',
    width: '200px',
},{
    title: '反佣周期',
    dataIndex: 'rebateWeek',
    width: '100px',
},{
    title: '出入金方式',
    dataIndex: 'joinMoneyType',
    width: '150px',
},{
    title: '入金到账时间',
    dataIndex: 'joinMoneyTime',
    width: '150px',
},{
    title: '出金到账时间',
    dataIndex: 'drawMoneyTime',
    width: '150px',
},{
    title: '交易品种',
    dataIndex: 'product',
    width: '300px',
},{
    title: '最小入金金额',
    dataIndex: 'joinMinMoney',
    width: '150px',
},{
    title: '爆仓比例',
    dataIndex: 'burstRate',
    width: '150px',
},{
    title: '最大杠杆',
    dataIndex: 'maxLever',
    width: '150px',
},{
    title: '开户资料',
    dataIndex: 'openFile',
    width: '300px',
},{
    title: '排序',
    dataIndex: 'sorter',
    width: '100px',
},{
    title: '操作',
    width: '270px',
    fixed: 'right',
    scopedSlots: {customRender: 'handler'}
},];
