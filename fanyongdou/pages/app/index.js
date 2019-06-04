import React, {Component} from 'react'
import AdminLayout from '../../components/adminLayout'
import {Table, Button, Icon, Avatar, Alert} from 'antd'
import util from '../../util'
import {getPlatform, readIdCardAuth} from '../../api'

const columns = [{
    title: '交易商',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '返佣周期',
    dataIndex: 'rebateWeek',
    key: 'rebateWeek',
}, {
    title: '交易品种',
    dataIndex: 'product',
    key: 'product',
}, {
    title: '入金方式',
    dataIndex: 'joinMoneyType',
    key: 'joinMoneyType',
}, {
    title: '/',
    key: 'action',
    render: () => (
        <span>
      <a href="javascript:;">查看详情</a>
    </span>
    ),
}];

class Page extends Component {
    static defaultProps = {
        platform: [],
        user: {},
    }
    render() {
        const {
            platform,
            user,
        } = this.props;
        return (
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
                        <Avatar size={64} src={util.getSex(user.sex)}/>
                        <div className='ava-col'>
                            <p className='name'>
                                {user.name || user.phone}
                            </p>
                            <p className='user-info'>

                                {
                                    user.idCard ?
                                        <span style={{color: '#52c41a'}}><Icon type="idcard" theme="twoTone"
                                                                               twoToneColor="#52c41a"/>已实名认证</span> :
                                        <span style={{color: '#aaa'}}><Icon type="idcard"/>未实名认证</span>
                                }
                                {
                                    user.alipay || user.bankAccount ?
                                        <span style={{color: '#52c41a'}}><Icon type="credit-card" theme="twoTone"
                                                                               twoToneColor="#52c41a"/>收款方式</span> :
                                        <span style={{color: '#aaa'}}><Icon type="credit-card"/>未添加收款方式</span>
                                }
                                {
                                    user.hasAccount ?
                                        <span style={{color: '#52c41a'}}><Icon type="container"
                                                                               theme="twoTone"
                                                                               twoToneColor="#52c41a"/>已开立交易商账户</span> :
                                        <span style={{color: '#aaa'}}><Icon type="container"/>未开立交易商账户</span>
                                }
                            </p>
                        </div>
                        <div className='ava-col m-money'>
                            <p className='name'>
                                账户余额:
                            </p>
                            <p className='money'>
                                {util.formatMoney(user.money)}
                                <Button type='primary'>提现</Button>
                            </p>
                        </div>
                        <div className='ava-col m-money zuori'>
                            <p className='name'>
                                咋日佣金:
                            </p>
                            <p className='money'>
                                {util.formatMoney(user.yesterdayMoney)}
                                <a href="/app/money">查看资金明细</a>
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className='app-title'><strong>交易商返佣信息</strong></h2>
                <div>
                    <Table columns={columns}
                           rowKey={row => row.id}
                           pagination={false}
                           dataSource={platform}/>
                </div>
            </div>
        )
    }
}

export default function Index(props) {
    return (
        <AdminLayout>
            <Page {...props}/>
        </AdminLayout>
    )
}
Index.getInitialProps = async (ctx) => {
    const props = {};
    if (ctx.req) {
        const token = ctx.reduxStore.getState().token;
        const user = ctx.reduxStore.getState().member;
        const [idCard, platform] = await Promise.all([readIdCardAuth(token), getPlatform()]);
        props.user = user;
        props.idCard = idCard.data;
        props.platform = platform.data;
    }
    return props;
}
