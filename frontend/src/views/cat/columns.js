export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '100px',
}, {
    title: '名称',
    dataIndex: 'name',
    width: '20%',
}, {
    title: '导航栏',
    dataIndex: 'is_nav',
    scopedSlots: {customRender: 'nav'}
}, {
    title: '列表',
    dataIndex: 'is_list',
    scopedSlots: {customRender: 'list'}
},{
    title: '排序',
    dataIndex: 'sorter',
},{
    title: 'banner',
    dataIndex: 'banner',
},{
    title: '内容',
    dataIndex: 'content_id',
    scopedSlots: {customRender: 'content'}
},{
    title: '操作',
    scopedSlots: {customRender: 'handler'}
},];
