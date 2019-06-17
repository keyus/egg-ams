import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Form, Alert, Button, Upload, Icon, Select, Tooltip, message} from 'antd'
import {webOpenAccount} from "../../api";
import config from "../../util/config";
import './index.scss'

const Option = Select.Option;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 18,
            offset: 6,
        },
    },
};
class OpenAccountPage extends Component {
    static defaultProps = {
        platform: [],
        user: {},
        idCard: {},
        openAccount: null
    }
    state = {};
    submit = () => {
        this.props.form.validateFields((err, values) => {
            if (err) return;
            ['img1'].forEach(key => {
                values[key] = values[key][0].response.data[0]
            })
            this.fetch(values);
        });
    }
    fetch = async (values) => {
        this.setState({
            loading: true,
        })
        try {
            await webOpenAccount(values);
            message.success('提交开户资料成功，我们将尽快为您开户交易账户');
            this.setState({
                loading: false,
            })
            location.reload()
        } catch (e) {
            this.setState({
                loading: false,
            })
        }
    }
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        if (e && e.fileList.length > 1) e.fileList.shift();
        return e && e.fileList;
    }
    render() {
        const {
            platform,
            idCard,
            form,
            openAccount,
        }= this.props;
        const {getFieldDecorator} = form;
        const {
            status,
        } = idCard;
        if(!status || status ===2){
            return (
                <Alert
                    message="未实名认证或实名认证未通过"
                    description={
                        <>
                            请先提交实名认证资料，再访问此页面，我们将实用您的实名认证资料作为交易商账户人资料
                            <a href="/app/idCard">去实名认证&gt;&gt;</a>
                        </>
                    }
                    type="error"
                    showIcon
                />
            )
        }
        return (
            <>
                {
                    Array.isArray(openAccount) &&
                    Boolean(openAccount.length) &&
                    <Alert
                        message="正在处理您的开户资料，请耐心等待!"
                        description={
                            <>
                                {
                                    openAccount.map((it,key)=>(
                                        <div key={key} className='open-list-item'>
                                            <span>开户人姓名：{it.name}</span>
                                            <span>身份证号：{it.idCard}</span>
                                            <span>选择交易商：{it.platformName}</span>
                                            <span>当前状态：
                                                {it.status === 0 && '处理中'}
                                                {it.status === 1 && '已通过，交易账号已绑定到您的会员旗下'}
                                                {it.status === 2 && (it.note || '资料未通过')}
                                            </span>
                                        </div>
                                    ))
                                }
                            </>
                        }
                        type="warning"
                        showIcon
                    />
                }

                <h2 className='pay-title'>在线开户</h2>
                <div>
                    <Form {...formItemLayout}>
                        <Form.Item
                            label="姓名"
                        >
                            <span>{idCard.name}</span>
                            {
                                status === 0 &&
                                <Tooltip title="实名认证中">
                                    <Icon type="question-circle" style={{
                                        fontSize: '20px',
                                        color: '#faad14',
                                        marginLeft: '10px',
                                    }} />
                                </Tooltip>
                            }
                            {
                                status === 1 &&
                                <Tooltip title="已通过实名认证">
                                    <Icon type="idcard" style={{
                                        fontSize: '20px',
                                        color: '#52c41a',
                                        marginLeft: '10px',
                                    }} />
                                </Tooltip>
                            }

                        </Form.Item>
                        <Form.Item
                            label="身份证号码"
                        >
                            <span>{idCard.idCard}</span>
                        </Form.Item>
                        <Form.Item
                            label="交易商"
                        >
                            {getFieldDecorator('platformId', {
                                rules: [
                                    {required: true, message: '请选择交易商'}
                                ]
                            })(
                                <Select style={{ width: '520px' }}
                                        placeholder="请选择交易商">
                                    {
                                        platform.map((it,key)=>(
                                            <Option key={key} value={it.id} >{it.name}</Option>
                                        ))
                                    }
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item
                            label="手持协议照片"
                        >
                            {getFieldDecorator('img1', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                rules: [
                                    {required: true, message: '请上传手持协议照片'}
                                ]
                            })(
                                <Upload name="files"
                                        listType='picture'
                                        accept="image/png, image/jpeg, image/gif, image/jpg"
                                        action={config.uploadUrl}>
                                    <Button>
                                        <Icon type="upload"/> 更新手持协议照片
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" onClick={this.submit}>提交开户</Button>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}

export default connect((state)=>{
    return {
        user: state.member,
    }
},null)(Form.create()(OpenAccountPage))
