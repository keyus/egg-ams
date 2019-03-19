export const columns = [{
    title: '编号',
    dataIndex: 'id',
    sorter: true,
    width: '20%',
    scopedSlots: {customRender: 'name'},
}, {
    title: '标题',
    dataIndex: 'title',
    width: '20%',
}, {
    title: '作者',
    dataIndex: 'author',
},{
    title: '来源',
    dataIndex: 'from',
},{
    title: '分类',
    dataIndex: 'catId',
},{
    title: '热门',
    dataIndex: 'hot',
},{
    title: '置顶',
    dataIndex: 'top',
},{
    title: '排序',
    dataIndex: 'sortId',
},{
    title: '创建时间',
    dataIndex: 'createTime',
},{
    title: '更新',
    dataIndex: 'updateTime',
},{
    title: '/',

},];
