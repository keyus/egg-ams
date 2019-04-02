export const columns = [{
    title: '编号',
    dataIndex: 'id',
    width: '120px',
}, {
    title: '标题',
    width: '20%',
    scopedSlots: {customRender: 'title'}
},
//     {
//     title: '作者',
//     dataIndex: 'author',
// },
    {
    title: '分类',
    dataIndex: 'cat_id',
    scopedSlots: {customRender: 'cat_id'}
},{
    title: '热门',
    dataIndex: 'hot',
    scopedSlots: {customRender: 'hot'}
},{
    title: '置顶',
    dataIndex: 'top',
    scopedSlots: {customRender: 'top'}
},{
    title: '排序',
    dataIndex: 'sorter',
},{
    title: '更新',
    dataIndex: 'update_time',
},{
    title: '操作',
    scopedSlots: {customRender: 'handler'}
},];
