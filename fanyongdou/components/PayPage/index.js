import React, {Component} from 'react'
import {Menu, Switch} from 'antd'

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
    render() {
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
                        {
                            data.map((it,key)=>(
                                <div className='pay-fast' key={key}>
                                    <div><img src={it.logo}/></div>
                                    <div className='item-auto'>
                                        <p className='name'>{it.title}</p>
                                        <p>未设置{it.title}收款方式</p>
                                    </div>
                                    <div>
                                        <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </>
        )
    }
}
