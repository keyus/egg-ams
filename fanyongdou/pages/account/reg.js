import React, {Component} from 'react'
import {message} from 'antd'
import classnames from 'classnames'
import Head from 'next/head';
import '../../scss/reg.scss'
import {reg} from "../../util";

class RegForm extends Component {
    state = {
        phone: undefined,
        password: undefined,
        code: undefined,
        phoneError: false,
        passwordError: false,
        codeError: false,
        agree: false,
    }
    agree =()=>{
        this.setState({
            agree: !this.state.agree
        })
    }
    //手机号码
    changePhone = (el) => {
        const val = el.target.value;
        const error = {};
        if (val) error.phoneError = false;
        this.setState({
            phone: val,
            ...error,
        })
    }
    //密码
    changePassword = (el) => {
        const val = el.target.value;
        const error = {};
        if (val) error.passwordError = false;
        this.setState({
            password: val,
            ...error,
        })
    }
    //验证码
    changeCode = (el) => {
        const val = el.target.value;
        const error = {};
        if (val) error.codeError = false;
        this.setState({
            code: val,
            ...error,
        })
    }
    checkForm = () => {
        const {
            phone,
            password,
            code,
        } = this.state;
        this.setState({
            phoneError: phone ? reg.phone.test(phone) ? false : '手机号码格式错误' : '请输入手机号',
            passwordError: password ? reg.password.test(password) ? false : '密码为6-20位字母、数字、中文字符组成' : '请输入您的密码',
            codeError: code ? reg.code.test(code) ? false : '验证码6-8位字符' : '请输入您的验证码',
        },()=>this.submit())
    }

    submit=()=>{
        const {phoneError,passwordError,codeError, agree} = this.state;
        if(phoneError || passwordError || codeError) return false;
        if(!agree){
            message.error('请先阅读服务协议并勾选同意再次点击提交');
            return false;
        }
    }

    render() {
        const {
            phoneError,
            passwordError,
            codeError,
            agree,
        } = this.state;
        return (
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
                                   onChange={this.changePhone}
                                   className="field"
                                   placeholder="建议使用常用手机号"
                                   autoComplete="new-phone"
                            />
                            <i className="i-status"/>
                            <i className="i-cancel"/>
                        </div>
                        {
                            phoneError &&
                            <div className="input-tip">
                                <span className="error">
                                    <i className="i-error"/>{phoneError}
                                </span>
                            </div>
                        }

                    </div>

                </div>
                <div className="item-getcode-wrap">
                    <div className="form-item form-item-getcode">
                        <input type="password"
                               placeholder="密码"
                               maxLength="20"
                               name="password"
                               onChange={this.changePassword}
                               className='form-input'
                               autoComplete="new-password"/>
                    </div>
                    <div className="input-tip" style={{marginTop: '-5px', marginBottom: '10px'}}>
                        {
                            passwordError &&
                            <span className="error">
                                <i className="i-error"/>{passwordError}
                                </span>
                        }
                    </div>

                </div>

                <div className="item-getcode-wrap">
                    <div className="form-item form-item-getcode">
                        <input type="text"
                               placeholder="验证码"
                               name="verify"
                               maxLength="8"
                               onChange={this.changeCode}
                               className='form-input'
                               autoComplete="off"/>
                    </div>
                    <div className="input-tip" style={{marginTop: '-5px', marginBottom: '10px'}}>
                        {
                            codeError &&
                            <span className="error">
                                <i className="i-error"/>{codeError}
                                </span>
                        }
                    </div>
                </div>
                <div className='reg-check' >
                    <i onClick={this.agree}
                       className={classnames({
                        'io-select' : true,
                        'io-selected' : agree,
                    })}/>开通账号表示同意并遵守《返佣豆服务协议》
                </div>
                <div className="btn-register" onClick={this.checkForm}>下一步</div>
            </div>
        )
    }
}

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
                <RegForm/>
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

