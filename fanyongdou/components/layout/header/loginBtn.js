import Link from 'next/link'

export default function LoginBtn() {
    return (
        <div className="header-nav-operation">
            <Link href='/account/login'>
                <div className="buy-btn">用户登录</div>
            </Link>
        </div>
    )
}
