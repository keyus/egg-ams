import moment from 'moment';

export default [
    {
        title: '提交资料日期',
        dataIndex: 'createTime',
        key: 'createTime',
        render(val){
            return moment(val).format('YYYY-MM-DD HH:mm')
        }
    },
    {
        title: '开户人姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '开户人身份证号',
        dataIndex: 'idCard',
        key: 'idCard',
    },
    {
        title: '交易商',
        dataIndex: 'platformName',
        key: 'platformName',
    },
    {
        title: '当前状态',
        dataIndex: 'status',
        key: 'status',
        render(val){
            if(val === 0) return '处理中'
            if(val === 1) return <i style={{color: '#52c41a'}}>开户成功</i>
            if(val === 2) return <i style={{color: '#f5222d'}}>开户失败</i>
        }
    },
    {
        title: '备注',
        dataIndex: 'note',
        key: 'note',
        render(val){
            return val || <i style={{
                color: '#bbb',
                fontStyle: 'normal'
            }}>暂无备注</i>
        }
    },
]
