import React, {Component} from 'react'
import {Table,Tooltip,Icon, Button} from 'antd'
import {readOpenAccountOther} from "../../api";
import Add from './add'
import './index.scss'
import columns from "./columns";
export default class Index extends Component {
    static defaultProps = {
        platform: [],
        user: {},
        idCard: {},
        openAccount: [],
    }
    state = {
        dataSource: [],
        loading: false,
        visible: false,
    };

    openAdd=()=>{
        this.setState({
            visible: true,
        })
    }
    fetch = ()=>{
        location.reload()
    }
    render() {
        const {
            platform,
            openAccount,
        } = this.props;
        const {
            loading,
            visible,
        } = this.state;
        return (
            <div>
                <h2 className='ac-title'>
                    为他人开户情况
                    <Tooltip placement="topLeft" title="开户成功后可以在交易账号列表查看旗下他人账号">
                        <Icon type="question-circle" style={{color: '#91d5ff', marginLeft: '10px'}} />
                    </Tooltip>
                    <Button type="primary"
                            onClick={this.openAdd}
                            style={{marginLeft: '50px'}}><Icon type="plus" /> 新增开户</Button>

                    <span style={{
                        fontSize: '12px',
                        marginLeft: '20px',
                        color: '#aaa',
                        fontWeight: 'normal'
                    }}>我们将为您展示最近的20条开户记录</span>
                </h2>
                <Table columns={columns}
                       loading={loading}
                       rowKey={item=>item.id}
                       pagination={false}
                       locale={{emptyText: '当前没有提交开户资料'}}
                       dataSource={openAccount} />

                <Add visible={visible}
                     platform={platform}
                     onEdited={this.fetch}
                     onClose={()=>this.setState({visible: false})}/>
            </div>
        )
    }
}

