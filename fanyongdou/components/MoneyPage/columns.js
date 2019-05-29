import moment from 'moment';
import util from '../../util'

export default ()=>{
    return [
        {
            title: '入账日期',
            dataIndex: 'moneyDate',
            key: 'moneyDate',
            width: '120px',
            render(val){
                return moment(val).format('YYYY-MM-DD')
            }
        },{
            title: '收支类型',
            dataIndex: 'type',
            key: 'type',
            width: '100px',
            align: 'center',
            render(val){
                if(val === 0) return '支出'
                if(val === 1) return '收入'
            }
        },{
            title: '金额',
            dataIndex: 'money',
            key: 'money',
            width: '150px',
            render(val, item){
                return <span style={{
                    color: item.type === 0 ? 'forestgreen' : 'red'
                }}>{item.type === 0 ? '-' : '+' } {util.formatMoney(val)}</span>
            }
        },{
            title: '入账类型',
            dataIndex: 'entryType',
            key: 'entryType',
            width: '100px',
            align: 'center',
            render(val){
                if(val === 1) return '佣金';
                if(val === 2) return '提现';
                if(val === 0) return '系统派送';
                return '--'
            }
        },
        {
            title: '交易商',
            dataIndex: 'platformName',
            key: 'platformName',
            width: '150px',
            render(val){
                return val || '--'
            }
        },{
            title: '交易账号',
            dataIndex: 'account',
            key: 'account',
            width: '150px',
            render(val){
                return val || '--'
            }
        },{
            title: '交易账号姓名',
            dataIndex: 'accountName',
            key: 'accountName',
            width: '150px',
            render(val){
                return val || '--'
            }
        },{
            title: '交易品种合集',
            dataIndex: 'tradeProduct',
            key: 'tradeProduct',
            width: '200px',
            render(val){
                return val || '--'
            }
        },{
            title: '备注',
            dataIndex: 'note',
            key: 'note',
            width: '150px',
            render(val){
                return val || '--'
            }
        },
    ]
}
