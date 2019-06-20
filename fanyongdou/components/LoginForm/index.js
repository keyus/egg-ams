import React, {Component} from 'react'
import {Input,Button, Icon, Form, message} from 'antd'
import '../../scss/login.scss'
import http from '../../util/http'
import util, {reg} from '../../util'

class LoginForm extends Component{
    state = {
        loading: false,
    }
    componentDidMount(){
        this.checkLogin();
    }
    checkLogin= async ()=>{
        if(util.isLogin()){
            message.success('你已经登陆，即将为您跳转到会员中心...')
            setTimeout(()=>{
                util.goApp();
            },1000)
        }
    }
    submit=()=>{
        this.props.form.validateFields((err, values) => {
            if (err) return ;
            this.fetch(values)
        });
    }
    fetch= async (values)=>{
        this.setState({
            loading: true,
        })
        try {
            const res = await http.post('/webLogin',values);
            message.success('登陆成功');
            util.saveMember(res);
            util.goApp();
            this.setState({
                loading: false,
            });
        }catch (e) {
            console.warn(e);
            this.setState({
                loading: false,
            })
        }

    }
    render(){
        const {
            loading,
        } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('phone', {
                        rules: [
                            { required: true, message: '请输入会员手机号' },
                            { pattern: reg.phone, message: '请输入11位手机号码'},
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="会员手机号"
                            maxLength={11}
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [
                            { required: true, message: '请输入登录密码' },
                            { pattern: reg.password, message: '密码输入有误，请重新输入'},
                        ],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            maxLength={20}
                            placeholder="密码"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary"
                            loading={loading}
                            onClick={this.submit}
                            className="login-form-button">
                        登录
                    </Button>
                    <div className='login-bottom'>
                        <a className="login-form-forgot" href="/account/reg">
                            注册新会员
                        </a>
                        <a href="">忘记密码?</a>
                    </div>
                </Form.Item>
            </Form>
        )
    }
}
export default Form.create()(LoginForm);
