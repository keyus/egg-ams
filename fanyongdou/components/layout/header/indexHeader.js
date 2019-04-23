import React, {Component} from 'react'
import menus from './menus'
import LoginBtn from './loginBtn'
import classnames from 'classnames'

export default class IndexHeader extends Component {
    static defaultProps = {
        active: 1,
    }
    render() {
        const {
            active,
        } = this.props;
        return (
            <header className="in-header">
                <nav>
                    <div className='header-logo'>
                        <a href='/' className="router-link-active"><i className="header-logo-icon"/></a>
                    </div>
                    <div className="header-top-nav">
                        <ul className="header-nav-list">
                            {
                                menus.map((it,key)=>(
                                    <li className="header-nav-item" key={key}>
                                        <a href={it.path} className={classnames({
                                            active: it.index === active,
                                        })}>{it.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                        <b className="header-item-line" style={{opacity: '0', width: '51px', left: '216px'}}><i
                            className="header-light"/></b>
                    </div>
                    <LoginBtn/>
                </nav>
                <div className='banner-title ta-c'>返佣来客</div>
                <div className="subtitle ta-c">
                    大宗商品数据与用户洞察驱动的营销云平台 提供精准获客与用户价值延伸挖掘的一站式解决方案
                </div>
                <div className="banner-btn pr">
                    <a href="https://jddsp.jd.com/adhelper" target="_blank"
                       className="login-btn">
                        <span>在线开户</span>
                        <img src="/static/images/power-icon-arrow.png" className="arrow-icon"/>
                    </a>
                    <div className="video-btn">
                        <span>返佣介绍</span> <img src="/static/images/power-icon-arrow.png" className="arrow-icon"/>
                    </div>
                </div>
                <ul className="banner-text">
                    <li>
                        <div className="banner-text-top"><span>13</span>年+
                        </div>
                        <div className="banner-text-bottom">数据与技术积累</div>
                    </li>
                    <li>
                        <div className="banner-text-top"><span>15</span>亿+
                        </div>
                        <div className="banner-text-bottom">海量用户数据</div>
                    </li>
                    <li>
                        <div className="banner-text-top"><span>3</span>万+
                        </div>
                        <div className="banner-text-bottom">用户标签</div>
                    </li>
                    <li>
                        <div className="banner-text-top"><span>3000</span>+
                        </div>
                        <div className="banner-text-bottom">用户分类</div>
                    </li>
                </ul>
            </header>
        )
    }
}
