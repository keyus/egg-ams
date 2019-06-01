
export default function LoginBtn(props) {
    const {user} = props;
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
