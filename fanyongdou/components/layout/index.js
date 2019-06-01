import React, {Component} from 'react'
import Head from 'next/head';
import DefaultHeader from './header/defaultHeader'
import PrimaryHeader from './header/primaryHeader'
import IndexHeader from './header/indexHeader'
import Footer from './footer'
import './index.scss'

export default class Layout extends Component {
    static defaultProps = {
        user: {},               //会员登陆信息
        title: '返佣豆',
        index: false,           //是否是首页
        header: 'default',      //使用的头部
        active: 1,              //默认激活菜单 (首页)
    }
    get renderHeader (){
        const {
            index,
            header,
        } = this.props;
        if(index) return <IndexHeader {...this.props}/>;
        if(header === 'default') return <DefaultHeader {...this.props}/>;
        return <PrimaryHeader  {...this.props}/>
    }
    render() {
        const {
            title,
            children,
        } = this.props;
        return (
            <>
                <Head>
                    <title>{title}-返佣豆</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <link rel="stylesheet" href="/static/style/default.css"/>
                    <link rel="stylesheet" href="/static/style/style.css"/>
                </Head>
                {this.renderHeader}
                <>
                    {children}
                </>
                <Footer/>
            </>
        )
    }
}
