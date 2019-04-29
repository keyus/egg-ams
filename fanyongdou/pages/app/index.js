import AdminLayout from '../../components/adminLayout'
import {Table,Button,Icon,Avatar,Alert} from 'antd'

const columns = [{
    title: '交易商',
    dataIndex: 'platform',
    key: 'platform',
}, {
    title: '白银',
    dataIndex: 'sliver',
    key: 'sliver',
}, {
    title: '原油',
    dataIndex: 'a1',
    key: 'a1',
}, {
    title: '/',
    key: 'action',
    render: () => (
        <span>
      <a href="javascript:;">查看详情</a>
    </span>
    ),
}];
export default function Index() {
    const data = [];
    return (
        <AdminLayout>
            <div>
                <div className='alerts'>
                    <Alert
                        message="提现到账通知"
                        description="你的2019-10-20  至 2019-10-30号的佣金已经到账啦,请注意查收!"
                        type="info"
                        closable={true}
                        showIcon
                    />
                </div>
                <h2 className='app-title'><strong>账户信息</strong></h2>
                <div>
                    <div className='ava-user'>
                        <Avatar size={64} icon="user"/>
                        <div className='ava-col'>
                            <p className='name'>
                                爱村人人要
                            </p>
                            <p className='user-info'>
                                <span><Icon type="idcard"/>已实名认证</span>
                                <span><Icon type="credit-card"/>绑定银行卡</span>
                                <span><Icon type="global"/>已开立交易商账户</span>
                            </p>
                        </div>
                        <div className='ava-col m-money'>
                            <p className='name'>
                                账户余额:
                            </p>
                            <p className='money'>
                                ￥121211.05
                                <Button type='primary'>提现</Button>
                            </p>
                        </div>
                        <div className='ava-col m-money zuori'>
                            <p className='name'>
                                咋日佣金:
                            </p>
                            <p className='money'>
                                0
                                <a href="javascript:;">查看资金明细</a>
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className='app-title'><strong>交易商返佣信息</strong></h2>
                <div>
                    <Table columns={columns}  dataSource={data}/>
                </div>
            </div>
        </AdminLayout>
    )
}
