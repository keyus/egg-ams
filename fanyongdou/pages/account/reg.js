import Head from 'next/head';
import '../../scss/reg.scss'

export default function Reg() {
    return (
        <>
            <Head>
                <title>用户注册-返佣豆</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link rel="stylesheet" href="/static/style/reset.css"/>
            </Head>
            <div className="header">
                <div className="logo-con w clearfix">
                    <a href="/" className="logo ">
                        <img src="/static/images/logo.png" alt=""/>
                    </a>
                    <div className="logo-title">欢迎注册</div>
                    <div className="have-account">
                        已有账号？
                        <a href='/account/login'>请登录&gt;</a>
                    </div>
                </div>
            </div>

            <div className='reg-container w'>
                <div className="reg-wrap">
                    <div className="item-phone-wrap">
                        <div className="form-item form-item-phone">
                            <label className="select-country">中国
                                + 86
                                <a href="javascript:void(0) " className="arrow"/>
                            </label>
                            <div className="item-input-wrap form-item-error"
                            style={{
                                border: "1px solid rgb(221, 221, 221)"
                            }}>
                                <input type="text"
                                       maxLength="11"
                                       name="phone"
                                       className="field"
                                       placeholder="建议使用常用手机号"
                                       autoComplete="new-phone"
                                       />
                                    <i className="i-status"/>
                                    <i className="i-cancel"/>
                            </div>
                            <div className="input-tip">
                                <span id="form-phone-error" className="error">
                                    <i className="i-error"/>请输入手机号</span>
                            </div>
                        </div>

                    </div>
                    <div className="item-getcode-wrap">
                        <div className="form-item form-item-getcode" >
                            <input type="password"
                                   placeholder="密码"
                                   name="password"
                                   className='form-input'
                                   autoComplete="new-password" />
                        </div>
                        <div className="input-tip">
                            <span/>
                        </div>
                    </div>
                    <div className="item-getcode-wrap">
                        <div className="form-item form-item-getcode" >
                            <input type="text"
                                   placeholder="昵称"
                                   name="nickname"
                                   className='form-input'
                                   autoComplete="off" />
                        </div>
                        <div className="input-tip">
                            <span/>
                        </div>
                    </div>
                    <div className="item-getcode-wrap">
                        <div className="form-item form-item-getcode" >
                            <input type="text"
                                   placeholder="验证码"
                                   name="verify"
                                   className='form-input'
                                   autoComplete="off" />
                        </div>
                        <div className="input-tip">
                            <span/>
                        </div>
                    </div>
                    <div className='reg-check'>
                        <i className='io-select'/>开通账号表示同意并遵守《返佣豆服务协议》
                    </div>
                    <div className="btn-register">下一步</div>
                </div>
            </div>

            <div id="form-footer" className="footer w">
                <div className="links">
                    <a rel="nofollow" target="_blank" href="//www.jd.com/intro/about.aspx"> 关于我们</a>|
                    <a rel="nofollow" target="_blank" href="//www.jd.com/contact/">联系我们</a>|
                    <a rel="nofollow" target="_blank" href="//zhaopin.jd.com/">人才招聘</a>|
                    <a rel="nofollow" target="_blank" href="//www.jd.com/contact/joinin.aspx">商家入驻</a>|
                    <a rel="no  follow" target="_blank" href="//www.jd.com/intro/service.aspx">广告服务</a>|
                    <a rel="nofollow" target="_blank" href="//app.jd.com/">手机京东</a>|
                    <a target="_blank" href="//club.jd.com/links.aspx">友情链接</a>|
                    <a target="_blank" href="//media.jd.com">销售联盟</a>|
                    <a href="//club.jd.com/" target="_blank">京东社区</a>|
                    <a href="//gongyi.jd.com" target="_blank">京东公益</a>|
                    <a target="_blank" href="//en.jd.com/" clstag="pageclick|keycount|20150112ABD|9">English Site</a>
                </div>
                <div className="copyright">
                    Copyright©2004-2019&nbsp;&nbsp;京东JD.com&nbsp;版权所有
                </div>
            </div>
        </>

    )
}

