import React, {Component} from 'react'
import {Menu, Switch, message} from 'antd'
import util from '../../util'
const data = [
    {
        title: '支付宝',
        logo: '/static/images/pi_zhifubao.png'
    },
    {
        title: '银行卡',
        logo: '/static/images/pi_bankcard.png'
    },
];
export default class PayPage extends Component {
    state={
        loading: false,
        user: {
            alipayActive: 0,
            bankActive: 0,
        }
    }
    componentDidMount(){
        this.init();
    }
    init=()=>{
        try{
            const user = JSON.parse(localStorage.getItem('member')) || {};
            this.setState({
                user,
            })
        }catch (e) {
            message.error('错误的访问，即将退出系统')
            util.logout();
        }
    }
    render() {
        const {
            user,
            loading,
        } = this.state;
        const {
            alipayActive,
            bankActive,
        } = user;
        return (
            <>
                <h2 className='pay-title'>收款方式</h2>
                <div className='pay-box'>
                    <Menu
                        style={{ width: 200 }}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                    >
                        <Menu.Item key={1}>收款方式开关</Menu.Item>
                        <Menu.Item key={2}>支付宝收款</Menu.Item>
                        <Menu.Item key={3}>银行卡收款</Menu.Item>
                    </Menu>
                    <div className='pay-main'>
                        <div className='pay-fast'>
                            <div><img src='/static/images/pi_zhifubao.png'/></div>
                            <div className='item-auto'>
                                <p className='name'>支付宝</p>
                                <p>未设置支付宝收款方式</p>
                            </div>
                            <div>
                                <Switch checkedChildren="开"
                                        unCheckedChildren="关"
                                        checked={Boolean(alipayActive)}
                                        defaultChecked />
                            </div>
                        </div>
                        <div className='pay-fast'>
                            <div><img src='/static/images/pi_bankcard.png'/></div>
                            <div className='item-auto'>
                                <p className='name'>银行卡</p>
                                <p>未设置银行卡收款方式</p>
                            </div>
                            <div>
                                <Switch checkedChildren="开"
                                        unCheckedChildren="关"
                                        checked={Boolean(bankActive)}
                                        defaultChecked />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
