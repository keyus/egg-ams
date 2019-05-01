import React, {Component} from 'react'
import {Form, Input, Button, Alert, Upload,Icon} from 'antd'

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
class IdCardPage extends Component {
    get renderMessage (){
        return (
            <span>
                实名认证资料用于开立交易商账户的部分必须资料,认证成功后将不允许修改.认证信息将作为该账号信息主体.<br />
                如需新开不同身份认证的交易商账号，请使用<a href=''>[为他人开户]</a>功能, 该账号将自动升级为经纪人级别账号,您将获得更加丰厚的佣金回报<Icon type="pay-circle" />
            </span>
        )
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <>
                <h2 className='pay-title'>实名认证 [当前状态：未实名认证]</h2>
                <Alert message={this.renderMessage} type="warning" showIcon />
                <div>
                    <Form>
                        <Form.Item
                            label="姓名"
                            extra="重要:主账号人真实姓名,与收款银行卡姓名必须保持一致"
                        >
                            {getFieldDecorator('name', {
                                rules: [
                                    {required: true, message: '请输入您的姓名'}
                                ]
                            })(
                                <Input placeholder='请输入您的姓名' style={{width: '520px'}} />
                            )}
                        </Form.Item>
                        <Form.Item
                            label="身份证件号码"
                        >
                            {getFieldDecorator('cardNums', {
                                rules: [
                                    {required: true, message: '请输入您的证件号码'}
                                ]
                            })(
                                <Input placeholder='请输入您的证件号码'  style={{width: '520px'}}/>
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



                        <Form.Item>
                            <Button type="primary">更新</Button>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}

export default Form.create()(IdCardPage)
