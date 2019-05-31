import React, {Component} from 'react'
import {Form, Button, Input, Alert, message} from 'antd'
import {reg} from '../../util'
import {updatePay} from '../../api'
import util from "../../util";

class Alipay extends Component {
    static defaultProps ={
        user: {},
        updateUser(){},
    }
    state = {
        loading: false,
    }
    submit=()=>{
        this.props.form.validateFields((err, values) => {
            if (err) return ;
            this.fetch(values)
        });
    }
    fetch =async (values)=>{
        this.setState({
            loading: true,
        })
        try {
            await updatePay('alipay',values);
            message.success('保存成功');
            this.updateStorage(values)
            this.setState({
                loading: false,
            })
        }catch (e) {
            this.setState({
                loading: false,
            })
        }
    }
    updateStorage=(values)=>{
        const user = {...this.props.user};
        user.alipay = values.alipay;
        localStorage.setItem('member', JSON.stringify(user));
        this.props.updateUser(user);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const {
            user,
        } = this.props;

        const {
            loading,
        } = this.state;
        return (
            <Form className="login-form">
                <Alert message="提示：只能绑定实名认证的本人支付宝信息,如果使用支付宝方式提现成功，则不能再次更改支付宝收款账户" type="warning" style={{marginBottom: '20px'}} showIcon />
                <Form.Item label="支付宝姓名">
                    {getFieldDecorator('name', {
                        initialValue: user.name,
                    })(
                        <Input
                            disabled
                            maxLength={11}
                        />,
                    )}
                </Form.Item>
                <Form.Item label="支付宝账号">
                    {getFieldDecorator('alipay', {
                        initialValue: user.alipay,
                        rules: [
                            { required: true, message: '请输入支付宝账号' },
                            { pattern: reg.alipay, message: '支付宝账号必须是手机或者邮箱'},
                        ],
                    })(
                        <Input
                            maxLength={50}
                            placeholder="支付宝账号"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary"
                            loading={loading}
                            onClick={this.submit}
                            className="login-form-button">
                        保存
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}
export default Form.create()(Alipay);
