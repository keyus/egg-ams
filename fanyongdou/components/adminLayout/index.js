import React, {Component} from 'react'
import Head from 'next/head'
import Link from 'next/link';
import {Icon, Avatar, Popover} from 'antd'
import classnames from 'classnames'
import side from './side'
import './index.scss'
import util from '../../util'

export default class AdminLayout extends Component {
    static defaultProps = {
        title: '用户中心',
        active: 1,
    }
    state = {
        user: {
            phone: '--',
            name: '--'
        },
        loading: false,
    }
    componentDidMount(){
        this.init();
    }
    init=()=>{
        if(!util.isLogin()){
            util.logout();
            return ;
        }
        this.setState({
            user: util.getUser()
        })
    }
    logout=()=>{
        util.logout();
    }

    render() {
        const {
            title,
            active,
            children,
        } = this.props;
        const {
            user,
        } = this.state;
        const menus = (
            <ul className='user-menu'>
                <li><Icon type="user"/> 个人信息</li>
                <li><Icon type="credit-card"/> 银行卡资料</li>
                <li onClick={this.logout}><Icon type="logout"/> 退出登录</li>
            </ul>
        )
        return (
            <>
                <Head>
                    <title>{title}-返佣豆</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="stylesheet" href="/static/style/default.css"/>
                    <link rel="stylesheet" href="/static/style/style.css"/>
                </Head>
                <div className='ff-header'>
                    <h1><img src="/static/images/logo-white.png"/></h1>
                    <div className='ff-header-user'>
                        <Popover placement="bottomRight"
                                 content={menus} trigger="click">
                            <Avatar icon="user"/>
                            <span className='ml10'>{user.name || user.phone}</span>
                            <Icon type="down"/>
                        </Popover>
                    </div>
                </div>
                <div className='ff-side'>
                    <ul>
                        {
                            side.map((it, key) => (
                                <li key={key}>
                                    <Link href={it.path}>
                                        <a className={classnames({
                                            active: it.index === active,
                                        })}><Icon type={it.icon}/>{it.name}</a>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='ff-main'>
                    {children}
                </div>

            </>
        )
    }
}
