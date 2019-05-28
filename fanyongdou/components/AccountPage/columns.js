import moment from 'moment';

export default [
    {
        title: '交易商',
        dataIndex: 'platformName',
        key: 'platformName',
    }, {
        title: '交易账号',
        dataIndex: 'account',
        key: 'account',
    }, {
        title: '姓名',
        dataIndex: 'accountName',
        key: 'accountName',
    }, {
        title: '开户日期',
        dataIndex: 'date',
        key: 'date',
        render(val){
            return moment(val).format('YYYY-MM-DD')
        }
    },
    {
        title: '返佣周期',
        dataIndex: 'rebateWeek',
        key: 'rebateWeek',
        align: 'center'
    },
]
