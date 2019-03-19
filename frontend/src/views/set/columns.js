export const columns = [{
    title: '编号',
    dataIndex: 'id',
    sorter: true,
    width: '20%',
    scopedSlots: {customRender: 'name'},
}, {
    title: '名称',
    dataIndex: 'name',
    width: '20%',
}, {
    title: '导航栏',
    dataIndex: 'isNav',
},{
    title: '排序',
    dataIndex: 'sort',
},{
    title: '/',
},];
