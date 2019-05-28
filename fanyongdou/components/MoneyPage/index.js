import React, {Component} from 'react'
import {Menu,Icon, Row, Col,Select, DatePicker, Button, Table,} from 'antd'

import moment from 'moment';
import columns from './columns'

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
const Option = Select.Option;
export default class MoneyPage extends Component {
    static defaultProps = {
        platform: [],
    }
    state = {
        type: '0',
        loading: false,
        dataSource: [],
    }
    componentWillUnmount(){
        this.setState = ()=>{}
    }
    handleClick = (e) => {
        this.setState({
            type: e.key,
        });
    }
    render() {
        const {
            platform,
        } = this.props;
        const {
            type,
            loading,
            dataSource,
        } = this.state;
        return (
            <>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[type]}
                    mode="horizontal"
                >
                    <Menu.Item key={0}>
                        <Icon type="mail" />收入明细
                    </Menu.Item>
                    <Menu.Item key={1}>
                        <Icon type="mail" />提现记录
                    </Menu.Item>
                </Menu>

                <Row gutter={20} className='where'>
                    <Col span={8}>
                        <div className='item'>
                            <span className='item-name'>交易商：</span>
                            <div className='item-auto'>
                                <Select defaultValue=""
                                        placeholder="选择交易商"
                                        style={{ width: '100%' }}>
                                    <Option value="">全部交易商</Option>
                                    {
                                        platform.map((it,index)=>(
                                            <Option key={index}
                                                    value={it.id} >{it.name}</Option>
                                        ))
                                    }
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
                    <Table columns={columns}
                           loading={loading}
                           rowKey={item=>item.id}
                           locale={{emptyText: '暂无记录'}}
                           dataSource={dataSource} />
                </div>
            </>
        )
    }
}
