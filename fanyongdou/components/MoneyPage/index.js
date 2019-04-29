import React, {Component} from 'react'
import {Menu,Icon, Row, Col,Select, DatePicker, Button, Table,} from 'antd'

import moment from 'moment';
import columns from './columns'

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const Option = Select.Option;
export default class MoneyPage extends Component {
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={['mail']}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        <Icon type="mail" />收入明细
                    </Menu.Item>
                    <Menu.Item key="alipay">
                        <Icon type="mail" />提现记录
                    </Menu.Item>
                </Menu>

                <Row gutter={20} className='where'>
                    <Col span={8}>
                        <div className='item'>
                            <span className='item-name'>交易商：</span>
                            <div className='item-auto'>
                                <Select defaultValue="lucy" style={{ width: '100%' }}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='item'>
                            <span className='item-name'>时间：</span>
                            <div className='item-auto'>
                                <RangePicker
                                    style={{width: '100%'}}
                                    defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                                    format={dateFormat}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Button type="primary">筛选</Button>
                    </Col>
                </Row>
                <div className='ff-table'>
                    <Table columns={columns} dataSource={[]} />
                </div>
            </>
        )
    }
}
