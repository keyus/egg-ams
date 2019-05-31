import React, {Component} from 'react'
import {Form, Button, Input, Alert, Select} from 'antd'
import {reg} from '../../util'
import bank from '../../util/bank'
import {message} from "antd/lib/index";
import {updatePay} from "../../api";

const { Option } = Select;
class Bank extends Component {
    static defaultProps ={
        user: {}
    }
    state = {
        loading: false,
    }
    submit=()=>{
        this.props.form.validateFields((err, values) => {
            if (err) return ;
            const find = bank.find(it=> it.bankCode === values.bankCode);
            values.bankName = find.bankName;
            this.fetch(values)
        });
    }
    fetch = async (values)=>{
        this.setState({
            loading: true,
        })
        try {
            await updatePay('bank',values);
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
        user.bankCode = values.bankCode;
        user.bankAccount = values.bankAccount;
        user.bankName = values.bankName;
        user.bankAddress = values.bankAddress;
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
                <Alert message="提示：只能绑定实名认证的本人银行卡信息,如果使用银行卡方式提现成功，则不能再次更改银行卡收款账户" type="warning" style={{marginBottom: '20px'}} showIcon />
                <Form.Item label="持卡人姓名">
                    {getFieldDecorator('name', {
                        initialValue: user.name,
                    })(
                        <Input
                            disabled
                            maxLength={11}
                        />,
                    )}
                </Form.Item>
                <Form.Item label="发卡银行">
                    {getFieldDecorator('bankCode', {
                        initialValue: user.bankCode,
                        rules: [
                            { required: true, message: '请选择发卡银行' },
                        ],
                    })(
                        <Select style={{ width: '100%' }}>
                            {
                                bank.map((it,key)=>(
                                    <Option key={key}
                                            value={it.bankCode}>{it.bankName}</Option>
                                ))
                            }
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="银行卡号">
                    {getFieldDecorator('bankAccount', {
                        initialValue: user.bankAccount,
                        rules: [
                            { required: true, message: '请输入银行卡号' },
                            { pattern: reg.bank, message: '银行卡号码填写有误'},
                        ],
                    })(
                        <Input
                            maxLength={20}
                            placeholder="请输入银行卡号"
                        />
                    )}
                </Form.Item>
                <Form.Item label="开户行">
                    {getFieldDecorator('bankAddress', {
                        initialValue: user.bankAddress,
                        rules: [
                            { required: true, message: '请输入开户行' },
                        ],
                    })(
                        <Input
                            maxLength={50}
                            placeholder="请输入开户行"
                        />
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
export default Form.create()(Bank);
