import React, {Component} from 'react'
import {Form, Input, Button, message} from 'antd'
import AdminLayout from '../../components/adminLayout'
import {updatePassword} from "../../api";
import util, {reg} from '../../util'

class ModifyPage extends Component {
    state={
        confirmDirty: false,
    }
    handleConfirmBlur = e => {
        const value = e.target.value;
        this.setState({ confirmDirty: !!value });
    };
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (this.state.confirmDirty) {
            form.validateFields(['confirmPassword'], { force: true });
        }
        callback();
    };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('确认新密码不一致');
        } else {
            callback();
        }
    };

    submit=()=>{
        this.props.form.validateFields((err, values) => {
            if (err) return;
            this.fetch(values);
        });
    }
    fetch= async (values)=>{
        try {
            await updatePassword(values);
            message.success('密码修改成功,即将退出请重新登陆');
            setTimeout(()=>util.logout(),1000)
        }catch (e) {

        }
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h2 className='app-title'><strong>修改密码</strong></h2>
                <Form labelCol={{ span: 5 }}
                      wrapperCol={{ span: 8 }}>
                    <Form.Item label="原密码">
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '请输入原密码' },
                                { pattern: reg.password, message: '原密码输入有误' },
                            ],
                        })(<Input placeholder="请输入原密码"
                                  type="password"
                                  maxLength={20} />)}
                    </Form.Item>

                    <Form.Item label="新密码"
                                extra="新密码为6-20位英文字母、数字组成">
                        {getFieldDecorator('newPassword', {
                            rules: [
                                { required: true, message: '请输入新密码' },
                                { pattern: reg.password, message: '密码格式错误' },
                                { validator:this.validateToNextPassword,}
                            ],
                        })(<Input placeholder="请输入新密码"
                                  type="password"
                                  maxLength={20}/>)}
                    </Form.Item>
                    <Form.Item label="确认新密码">
                        {getFieldDecorator('confirmPassword', {
                            rules: [
                                { required: true, message: '确认新密码不能为空' },
                                { validator: this.compareToFirstPassword } ,
                            ],
                        })(<Input placeholder="请再次输入新密码"
                                  type="password"
                                  onBlur={this.handleConfirmBlur}
                                  maxLength={20}/>)}
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary"
                        onClick={this.submit}>
                            确认修改密码
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const ModifyPageCom = Form.create()(ModifyPage)

export default function Index(props) {
    return (
        <AdminLayout active={8}>
            <ModifyPageCom  {...props}/>
        </AdminLayout>
    )
}
