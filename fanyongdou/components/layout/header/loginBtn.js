import {connect} from 'react-redux'
function LoginBtn(props) {
    let user  =  props.user || {}
    return (
        <div className="header-nav-operation">
            {
                user.phone ?
                    <div>
                        <div className="member-user">
                            欢迎回来: {user.phone}
                            <a href='/app' className='app-btn'> 会员中心 </a>
                        </div>
                    </div>:
                    <a href='/account/login'>
                        <div className="buy-btn">用户登录</div>
                    </a>
            }

        </div>
    )
}
export default connect((state)=>{
    return {
        user: state.member,
    }
},null)(LoginBtn)
