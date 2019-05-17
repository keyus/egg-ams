import React, {Component} from 'react'
import {Menu, Form, Input, Alert, Button, Upload, Icon, Select} from 'antd'
import './index.scss'

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
    state = {
        current: '1',
    }
    render() {
        const {getFieldDecorator} = this.props.form;
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
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            )}
                        </Form.Item>

                        <Form.Item
                            label="身份证件正面照片"
                        >
                            {getFieldDecorator('cardImg1', {
                                rules: [
                                    {required: true, message: '请上传身份证正面照片'}
                                ]
                            })(
                                <Upload name="files" action="/upload.do">
                                    <Button>
                                        <Icon type="upload" /> 更新身份证正面照片
                                    </Button>
                                </Upload>
                            )}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary">更新</Button>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}

export default Form.create()(OpenAccountPage)
