import React, {Component} from 'react'
import {Table, Row ,Col, Radio} from 'antd'
import columns from './columns'
import './index.scss'

const dataSource = [
    {
        id: '1',
        platform: '西属大宗',
        account: '513018281873311',
        date: '2019-08-12 12:21',
        bi: '返佣比例',
        type: '周结',
        status: '正常'
    },
    {
        id: '1',
        platform: '中进大宗',
        account: '63632874772626',
        date: '2019-08-13 12:21',
        bi: '返佣比例',
        type: '月结',
        status: '正常'
    },
]
export default class AccountPage extends Component {
    state={
        current: 1,
    }
    handleSizeChange = (e) => {
        this.setState({ current: e.target.value });
    }
    render() {
        return (
            <>
                <h2 className='ac-title'>交易账号</h2>
                <Row gutter={20}>
                    <Col span={8} style={{
                        marginBottom: '14px'
                    }}>
                        <Radio.Group value={this.state.current} onChange={this.handleSizeChange}>
                            <Radio.Button value={1}>自有交易商账号</Radio.Button>
                            <Radio.Button value={2}>经纪人旗下账号</Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
                <Table columns={columns} pagination={false} dataSource={dataSource} />
            </>
        )
    }
}
