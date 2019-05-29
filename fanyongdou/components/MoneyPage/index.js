import React, {Component} from 'react'
import {Menu,Icon, Row, Col,Select, DatePicker, Button, Table,Alert} from 'antd'
import {getUserMoneyDetails} from '../../api'
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
        loading: false,
        type: '1',
        page: 1,
        platformId: undefined,
        startDate: undefined,
        endDate: undefined,

        total: 0,
        dataSource: [],
    }
    componentWillUnmount(){
        this.setState = ()=>{}
    }
    static getDerivedStateFromProps(props, state) {
        return {
            page: state.page,
        };
    }
    componentDidMount(){
        this.fetch();
    }
    fetch = async ()=>{
        this.setState({
            loading: true,
        })
        const {
            type,
            page,
            platformId,
            startDate,
            endDate,
        } = this.state;
        try{
            const res = await getUserMoneyDetails({
                type,
                page,
                platformId,
                startDate,
                endDate,
            });
            this.setState({
                loading: false,
                dataSource: res.data,
                total: res.total,
            })
        }catch (e) {
            this.setState({
                loading: false,
            })
        }
    }
    tableChange = (pagination) => {
        this.setState({
            page: pagination.current,
        }, () => this.fetch());
    }
    changeDate =(date)=>{
        if(date.length){
            return this.setState({
                startDate: date[0].format(dateFormat),
                endDate: date[1].format(dateFormat)
            })
        }
        this.setState({
            startDate: undefined,
            endDate: undefined,
        })
    }
    changePlatform=(val)=>{
        this.setState({
            platformId: val,
        })
    }
    handleClick = (e) => {
        this.setState({
            type: e.key,
        },()=>this.fetch());
    }
    reset = ()=>{
        this.setState({
            startDate: undefined,
            endDate: undefined,
            platformId: undefined,
            page: 1,
        },()=>this.fetch())
    }
    render() {
        const {
            platform,
        } = this.props;
        const {
            type,
            loading,
            dataSource,
            page,
            total,
            startDate,
            endDate,
            platformId,
        } = this.state;
        const column = columns(this);
        const x = column.reduce((a, b) => {
            if (a && a.width) {
                return parseInt(a.width) + parseInt(b.width)
            }
            return a + parseInt(b.width)
        })
        const rangeDate = startDate ? [moment(startDate, dateFormat), moment(endDate, dateFormat)] : [];

        return (
            <>
                <Alert message="尊敬的会员您好，我们将为您提供最大3个月的资金明细记录查询"
                       style={{marginBottom: '20px'}}
                       closable
                       type="warning" showIcon />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[type]}
                    mode="horizontal"
                >
                    <Menu.Item key={1}>
                        <Icon type="mail" />收入明细
                    </Menu.Item>
                    <Menu.Item key={0}>
                        <Icon type="mail" />提现记录
                    </Menu.Item>
                </Menu>

                <Row gutter={20} className='where'>
                    <Col span={8}>
                        <div className='item'>
                            <span className='item-name'>交易商：</span>
                            <div className='item-auto'>
                                <Select value={platformId}
                                        placeholder="选择交易商"
                                        allowClear
                                        onChange={this.changePlatform}
                                        style={{ width: '100%' }}>
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
                                    value={rangeDate}
                                    onChange={this.changeDate}
                                    placeholder={['开始日期','结束日期']}
                                    format={dateFormat}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <Button type="primary" onClick={this.fetch}>筛选</Button>
                        <Button onClick={this.reset} style={{marginLeft: '15px'}}>重置</Button>
                    </Col>
                </Row>
                <div className='ff-table'>
                    <Table columns={column}
                           loading={loading}
                           scroll={{x}}
                           rowKey={item=>item.id}
                           locale={{emptyText: '最近三个月没有资金明细记录'}}
                           onChange={(p) => this.tableChange(p)}
                           pagination={{
                               current: page,
                               pageSize: 10,
                               total,
                               showTotal(total) {
                                   return `共 ${total} 条记录`;
                               },
                           }}
                           dataSource={dataSource} />
                </div>
            </>
        )
    }
}
