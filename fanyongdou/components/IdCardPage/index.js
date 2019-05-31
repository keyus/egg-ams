import React, {Component} from 'react'
import {Form, Input, Button, Alert, Upload, Icon, message, Spin} from 'antd'
import {reg} from '../../util'
import {webIdCardAuth, readIdCardAuth} from "../../api";
import config from '../../util/config'


class IdCardPage extends Component {
    state = {
        loading: false,
        loaded: false,
        auth: {},                //认证中的信息
    }

    static getDerivedStateFromProps(props, state) {
        const {auth} = state;
        return {
            disabled: auth.status === 0 || auth.status === 1,   //是否允许修改
            status: auth.status,                              //undefined未认证  0认证中   2认证失败    2认证失败
            idCardImg1: auth.idCardImg1 ? [{
                uid: '1',
                name: '身份证正面照片.png',
                status: 'done',
                response: { data: [auth.idCardImg1] },
                url: `${config.imgUrl}${auth.idCardImg1}`,
            }] : [],
            idCardImg2: auth.idCardImg2 ? [{
                uid: '1',
                name: '身份证反面照片.png',
                status: 'done',
                response: { data: [auth.idCardImg2] },
                url: `${config.imgUrl}${auth.idCardImg2}`,
            }] : [],
            idCardHandImg: auth.idCardHandImg ? [{
                uid: '1',
                name: '手持身份证照片.png',
                status: 'done',
                response: { data: [auth.idCardHandImg] },
                url: `${config.imgUrl}${auth.idCardHandImg}`,
            }] : [],
        }
    }

    componentDidMount() {
        this.readIdCardAuth();
    }

    get renderMessage() {
        return (
            <span>
                实名认证资料用于开立交易商账户的部分必须资料,认证成功后将不允许修改.认证信息将作为该账号信息主体.<br/>
                如需新开不同身份认证的交易商账号，请使用<a href=''>[为他人开户]</a>功能, 该账号将自动升级为经纪人级别账号,您将获得更加丰厚的佣金回报<Icon type="pay-circle"/>
            </span>
        )
    }

    readIdCardAuth = async () => {
        try {
            const res = await readIdCardAuth();
            this.setState({
                auth: res.data || {},
                loaded: true,
                disabled: true,
            })
        } catch (e) {
        }
    }
    submit = () => {
        if (this.state.disabled) {
            return;
        }
        this.props.form.validateFields((err, values) => {
            if (err) return;
                ['idCardImg1', 'idCardImg2', 'idCardHandImg'].forEach(key => {
                values[key] = values[key][0].response.data[0]
            })
            this.fetch(values)
        });
    }
    fetch = async (values) => {
        this.setState({
            loading: true,
        })
        try {
            await webIdCardAuth(values);
            message.success('保存成功');
            this.setState({
                loading: false,
            })
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
        const {getFieldDecorator} = this.props.form;
        const {
            loaded,
            auth,
            status,
            idCardImg1,
            idCardImg2,
            idCardHandImg,
            disabled,
        } = this.state;
        if (!loaded) {
            return <Spin size="large"
                         tip="身份读取中..."
                         style={{marginTop: '20px'}}/>
        }
        return (
            <>
                <h2 className='pay-title'>实名认证 [当前状态：{config.authStatus[status] || '未认证'}]</h2>
                <Alert message={this.renderMessage} type="warning" showIcon/>
                <div>
                    <Form>
                        <Form.Item
                            label="姓名"
                            extra="重要:主账号人真实姓名,与收款银行卡姓名必须保持一致"
                        >
                            {getFieldDecorator('name', {
                                initialValue: auth.name,
                                rules: [
                                    {required: true, message: '请输入您的姓名'},
                                    {pattern: reg.text, message: '姓名必须是中文'},
                                    {min: 2, max: 8, message: '姓名为2-8个中文'},
                                ]
                            })(
                                <Input placeholder='请输入您的姓名'
                                       disabled={disabled}
                                       style={{width: '520px'}}/>
                            )}
                        </Form.Item>
                        <Form.Item
                            label="身份证件号码"
                        >
                            {getFieldDecorator('idCard', {
                                initialValue: auth.idCard,
                                rules: [
                                    {required: true, message: '请输入您的证件号码'},
                                    {pattern: reg.idCard, message: '身份证号码格式不正确'},
                                ]
                            })(
                                <Input placeholder='请输入您的证件号码'
                                       disabled={disabled}
                                       style={{width: '520px'}}/>
                            )}
                        </Form.Item>

                        <Form.Item
                            label="身份证件正面照片"
                        >
                            {getFieldDecorator('idCardImg1', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                initialValue: idCardImg1,
                                rules: [
                                    {required: true, message: '请上传身份证正面照片'}
                                ]
                            })(
                                <Upload name="files"
                                        listType='picture'
                                        disabled={disabled}
                                        accept="image/png, image/jpeg, image/gif, image/jpg"
                                        action={config.uploadUrl}>
                                    <Button>
                                        <Icon type="upload"/> 更新身份证正面照片
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>
                        <Form.Item
                            label="身份证件反面照片"
                        >
                            {getFieldDecorator('idCardImg2', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                initialValue: idCardImg2,
                                rules: [
                                    {required: true, message: '请上传身份证反面照片'}
                                ]
                            })(
                                <Upload name="files"
                                        listType='picture'
                                        disabled={disabled}
                                        accept="image/png, image/jpeg, image/gif, image/jpg"
                                        action={config.uploadUrl}>
                                    <Button>
                                        <Icon type="upload"/> 更新身份证反面照片
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>
                        <Form.Item
                            label="手持身份证照片"
                        >
                            {getFieldDecorator('idCardHandImg', {
                                valuePropName: 'fileList',
                                getValueFromEvent: this.normFile,
                                initialValue: idCardHandImg,
                                rules: [
                                    {required: true, message: '请上传手持身份证照片'}
                                ]
                            })(
                                <Upload name="files"
                                        listType='picture'
                                        disabled={disabled}
                                        accept="image/png, image/jpeg, image/gif, image/jpg"
                                        action={config.uploadUrl}>
                                    <Button>
                                        <Icon type="upload"/> 更新手持身份证照片
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>

                        {
                            status !== 1 &&
                            <Form.Item>
                                <Button type="primary"
                                        disabled={disabled}
                                        onClick={this.submit}>
                                    {
                                        disabled ? '身份认证中...' : '提交实名认证'
                                    }
                                </Button>
                            </Form.Item>
                        }

                    </Form>
                </div>
            </>
        )
    }
}

export default Form.create()(IdCardPage)
