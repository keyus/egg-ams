import React, {Component} from 'react'
import {Menu , message} from 'antd'
import Open from './open'
import Alipay from './alipay'
import Bank from './bank'
import util from "../../util";
export default class PayPage extends Component {
    state = {
        user: {
            alipayActive: 0,
            bankActive: 0,
        },
        key: '1',
    }
    componentDidMount() {
        this.init();
    }
    changeMenus=({key})=>{
        this.setState({
            key,
        })
    }
    init = () => {
        try {
            const user = JSON.parse(localStorage.getItem('member')) || {};
            this.setState({
                user,
            })
        } catch (e) {
            message.error('错误的访问，即将退出系统')
            util.logout();
        }
    }
    updateUser = (user)=>{
        this.setState({
            user,
        })
    }
    render() {
        const {
            user,
            key,
        } = this.state;
        return (
            <>
                <h2 className='pay-title'>收款方式</h2>
                <div className='pay-box'>
                    <Menu
                        style={{width: 200}}
                        defaultSelectedKeys={[key]}
                        onClick={this.changeMenus}
                        mode="inline"
                    >
                        <Menu.Item key={1}>收款方式开关</Menu.Item>
                        <Menu.Item key={2}>支付宝收款</Menu.Item>
                        <Menu.Item key={3}>银行卡收款</Menu.Item>
                    </Menu>
                    <div className='pay-main'>
                        { Number(key) === 1 && <Open user={user} updateUser={this.updateUser}/>}
                        { Number(key) === 2 && <Alipay user={user} updateUser={this.updateUser}/>}
                        { Number(key) === 3 && <Bank user={user} updateUser={this.updateUser}/>}
                    </div>
                </div>
            </>
        )
    }
}
