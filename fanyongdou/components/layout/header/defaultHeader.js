import React, {Component} from 'react'
import menus from "./menus"
import LoginBtn from './loginBtn'
import classnames from 'classnames'

export default class DefaultHeader extends Component {
    static defaultProps = {
        active: 1,
        user: {},
    }
    render() {
        const {
            active,
            user,
        } = this.props;
        return (
            <header className="in-header default-header">
                <nav>
                    <div className='header-logo'>
                        <a href='/'><i className="header-logo-icon"/></a>
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
            </header>
        )
    }
}
