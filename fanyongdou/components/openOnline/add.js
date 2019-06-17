import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Icon, Button, Form, Select, Input, Drawer, Upload, message} from 'antd'
import config from "../../util/config";
import {reg} from '../../util/index'
import {webOpenAccountOther} from '../../api/index'

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

class Add extends Component {
    static defaultProps = {
        platform: [],
        visible: false,
        onClose(){},
        onEdited(){},
    }
    state = {
        loading: false,
    };
    normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        if (e && e.fileList.length > 1) e.fileList.shift();
        return e && e.fileList;
    }
    submit = () => {
        this.props.form.validateFields((err, values) => {
            if (err) return;
            [
                'idCardImg1',
                'idCardImg2',
                'bankImg1',
                'idCardHandImg',
            ].forEach(key => {
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
            await webOpenAccountOther(values);
            message.success('资料提交成功，我们将尽快为您处理!');
            this.props.onClose();
            this.props.onEdited();
            this.setState({
                loading: false,
            })
        } catch (e) {
            this.setState({
                loading: false,
            })
        }
    }
    render() {
        const {
            form,
            visible,
            platform,
        } = this.props;
        const {getFieldDecorator} = form;
        const {
            loading,
        } = this.state;
        return (
            <Drawer
                title="在线开户"
                placement="right"
                width={600}
                onClose={this.props.onClose}
                visible={visible}
            >
                <Form {...formItemLayout}>
                    <Form.Item
                        label="姓名"
                    >
                        {getFieldDecorator('name', {
                            rules: [
                                {required: true, message: '请输入开户人姓名'},
                                {pattern: reg.text , message: '开户人姓名必须是中文'},
                                {min: 2,max: 10 , message: '姓名为2-10个中文'},
                            ]
                        })(
                            <Input placeholder="请输入开户人姓名"
                                   maxLength={10}
                            />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="身份证号码"
                    >
                        {getFieldDecorator('idCard', {
                            rules: [
                                { required: true, message: '请输入开户人身份证号码'},
                                { pattern: reg.idCard , message: '身份证号码15-19位'}
                            ]
                        })(
                            <Input maxLength={19}
                                   placeholder="请输入开户人身份证号码" />
                        )}
                    </Form.Item>
                    <Form.Item
                        label="交易商"
                    >
                        {getFieldDecorator('platformId', {
                            rules: [
                                {required: true, message: '请选择交易商'}
                            ]
                        })(
                            <Select style={{ width: '100%' }}
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
                        label="身份证正面照片"
                    >
                        {getFieldDecorator('idCardImg1', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            rules: [
                                {required: true, message: '请上传身份证正面照片'}
                            ]
                        })(
                            <Upload name="files"
                                    listType='picture'
                                    accept="image/png, image/jpeg, image/gif, image/jpg"
                                    action={config.uploadUrl}>
                                <Button>
                                    <Icon type="upload"/> 身份证正面照片
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>

                    <Form.Item
                        label="身份证反面照片"
                    >
                        {getFieldDecorator('idCardImg2', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            rules: [
                                {required: true, message: '请上传身份证反面照片'}
                            ]
                        })(
                            <Upload name="files"
                                    listType='picture'
                                    accept="image/png, image/jpeg, image/gif, image/jpg"
                                    action={config.uploadUrl}>
                                <Button>
                                    <Icon type="upload"/> 身份证反面照片
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="签约银行卡照片"
                    >
                        {getFieldDecorator('bankImg1', {
                            valuePropName: 'fileList',
                            getValueFromEvent: this.normFile,
                            rules: [
                                {required: true, message: '请上传签约银行卡照片'}
                            ]
                        })(
                            <Upload name="files"
                                    listType='picture'
                                    accept="image/png, image/jpeg, image/gif, image/jpg"
                                    action={config.uploadUrl}>
                                <Button>
                                    <Icon type="upload"/> 签约银行卡照片
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>
                    <Form.Item
                        label="手持协议照片"
                    >
                        {getFieldDecorator('idCardHandImg', {
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
                                    <Icon type="upload"/> 手持协议书照片
                                </Button>
                            </Upload>
                        )}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary"
                                loading={loading}
                                onClick={this.submit}>提交开户申请</Button>
                    </Form.Item>
                </Form>
            </Drawer>
        )
    }
}

export default connect((state)=>{
    return {
        user: state.member,
    }
},null)(Form.create()(Add))
