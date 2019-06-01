import React, {Component} from 'react'
import {Menu, Form, Input, Alert, Button, Upload, Icon, Select} from 'antd'
import './index.scss'
import {message} from "antd/lib/index";
import {webIdCardAuth} from "../../api";
import config from "../../util/config";

const Option = Select.Option;
const fileList = [{
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
    uid: '-2',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

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
    }
    state = {
        current: '1',
    }
    static getDerivedStateFromProps(props, state) {
        return {

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
        const {
            platform,
            form,
        }= this.props;
        const {
        } = this.state;
        const {getFieldDecorator} = form;
        return (
            <>
                <h2 className='pay-title'>在线开户</h2>
                <Menu
                    selectedKeys={[this.state.current]}
                    className='open-menus'
                    mode="horizontal"
                >
                    <Menu.Item key={1}>
                        我要开户
                    </Menu.Item>
                    <Menu.Item key={2}>
                        为他人开户
                    </Menu.Item>
                </Menu>
                <div>
                    <Alert
                        description="开户资料将使用此账号的实名认证资料，如为他人开户请使用为他人开户功能"
                        type="warning"
                        className='open-menus'
                        showIcon
                    />
                    <Form {...formItemLayout}>
                        <Form.Item
                            label="姓名"
                        >
                            <span>呆耨在</span>
                        </Form.Item>
                        <Form.Item
                            label="身份证号码"
                        >
                            <span>518399282899990111</span>
                        </Form.Item>
                        <Form.Item
                            label="交易商"
                        >
                            {getFieldDecorator('name', {
                                rules: [
                                    {required: true, message: '请输入您的姓名'}
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
                            label="身份证件正面照片"
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
                                        <Icon type="upload"/> 更新身份证正面照片
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

export default Form.create()(OpenAccountPage)
