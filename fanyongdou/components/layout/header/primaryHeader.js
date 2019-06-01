import React, {Component} from 'react'
import menus from './menus'
import LoginBtn from './loginBtn'
import classnames from 'classnames'

export default class PrimaryHeader extends Component {
    static defaultProps = {
        active: 1,
        user: {},
    }
    render() {
        const {
            active,
            banner,
            user,
        } = this.props;
        return (
            <header className="in-header primary-header">
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
                    <LoginBtn user={user}/>
                </nav>
                <div className='primary-header-const'>
                    <p className='sub-title'>行情中心</p>
                    <p className='sub-content'>
                        基于大数据及AI优势，结合用户交易周期，获取全球市场行情数据实时走向。
                        给予平台用户个性化、精准合理的行情管理方案.
                    </p>
                </div>


            </header>
        )
    }
}
