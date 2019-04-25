import Head from 'next/head';

export default function Login() {
    return (
        <>
            <Head>
                <title>用户登录-返佣豆</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="stylesheet" href="/static/style/reset.css"/>
                <link rel="stylesheet" href="/static/style/login.css"/>
            </Head>
            <div className="main-wrap">
                <div className="banner-wrap">
                    <div className="swipe-box">
                        <div className="swipe-item"><img className="swipe-img" src="/static/images/bg1.jpg" alt=""/></div>
                    </div>
                    <div className="bg-point"/>
                </div>
                <div className="center-wrap">
                    <a href="/" className="logo"/>
                    <div className="swipe-text-box">
                        <div className="swipe-text-item">
                            <h4>返佣豆</h4>
                            <h5>大数据与用户洞察驱动精选平台</h5>
                            <h6>降低交易成本 / 精准选择 / 归因与洞察 / 低风险</h6>
                        </div>
                    </div>
                    <div className="login-box">
                        <div className="waiting-box" style={{display: 'block'}}>
                            <iframe id="iframe" className="login-iframe"
                                    data-src="//passport.jd.com/common/loginPage?from=uc_jcloud&amp;btnTag=ee19d7c480d8e15d"
                                    frameBorder="0"
                                    src="//passport.jd.com/common/loginPage?from=uc_jcloud&amp;btnTag=ee19d7c480d8e15d&amp;ReturnUrl=http%3A%2F%2Fjddsp.jd.com%2Fadhelper%2F%23%2F"/>
                        </div>
                    </div>
                    <div className="footer  pr">
                        <div className="top-box">
                            <h6 className="right-title">对我们的产品有任何疑问，请联系我们 <span>（工作时间周一至周五9:00-18:00）</span></h6>
                            <div className="right-item">
                                <div className="icon-tel"/>
                                <div className="text"><span>400-088-8816（按7按3接入来客专线）</span></div>
                                <div className="icon-email"/>
                                <div className="text"><span>faas@jd.com</span><span
                                    className="pl20">laike@jd.com（来客专属）</span></div>
                            </div>
                        </div>
                        <div className="bottom-box">
                            <ul className="bottom-list clearfix">
                                <li><a href="https://jr.jd.com" target="_blank">京东金融</a></li>
                                <li><a href="https://www.jd.com" target="_blank">京东商城</a></li>
                                <li><a href="https://jrhelp.jd.com/show/getProblemInfo?id=688" target="_blank">关于京东金融</a>
                                </li>
                                <li><a href="https://wx.jdcloud.com/" target="_blank">京东万象</a></li>
                                <li><a href="https://jrhelp.jd.com/show/getProblemInfo-1677" target="_blank">免责声明</a></li>
                                <li><a href="https://jrhelp.jd.com/show/getProblemInfo-3061" target="_blank">知识产权</a></li>
                                <li><a href="https://jrhelp.jd.com/show/getProblemInfo-2748" target="_blank">隐私政策</a></li>
                            </ul>
                            <h6 className="copyright">Copyright © 2014-2018 京东JD.com版权所有</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

