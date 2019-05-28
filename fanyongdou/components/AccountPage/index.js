import React, {Component} from 'react'
import {Table, Row ,Col, Radio} from 'antd'
import columns from './columns'
import {getUserAccount} from '../../api'
import './index.scss'

export default class AccountPage extends Component {
    state={
        type: 0,                //0   自有账号    1：旗下他人账号
        dataSource: [],
        loading: false,
    }
    componentDidMount(){
        this.fetch();
    }
    componentWillUnmount(){
        this.setState = ()=>{}
    }
    fetch= async ()=>{
        this.setState({
            loading: true,
        })
        try {
            const res = await getUserAccount({type: this.state.type});
            this.setState({
                loading: false,
                dataSource: res.data,
            })
        }catch (e) {
            this.setState({
                loading: false,
            })
        }
    }
    handleSizeChange = (e) => {
        this.setState({ type: e.target.value },()=>this.fetch());
    }
    render() {
        const {
            dataSource,
            type,
            loading,
        } = this.state;
        return (
            <>
                <h2 className='ac-title'>交易账号</h2>
                <Row gutter={20}>
                    <Col span={8} style={{
                        marginBottom: '14px'
                    }}>
                        <Radio.Group value={type} onChange={this.handleSizeChange}>
                            <Radio.Button value={0}>自有交易账号</Radio.Button>
                            <Radio.Button value={1}>旗下他人账号</Radio.Button>
                        </Radio.Group>
                    </Col>
                </Row>
                <Table columns={columns}
                       loading={loading}
                       rowKey={item=>item.id}
                       pagination={false}
                       locale={{emptyText: '暂无记录'}}
                       dataSource={dataSource} />
            </>
        )
    }
}
