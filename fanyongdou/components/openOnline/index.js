import React, {Component} from 'react'
import {Table,message} from 'antd'
import {webOpenAccount} from "../../api";
import './index.scss'
import columns from "./columns";
export default class Index extends Component {
    static defaultProps = {
        platform: [],
        user: {},
        idCard: {},
        openAccount: null
    }
    state = {
        dataSource: [],
        loading: false,
    };

    fetch = async (values) => {
        this.setState({
            loading: true,
        })
        try {
            await webOpenAccount(values);
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
            loading,
            dataSource,
        } = this.state;
        return (
            <div>
                <h2 className='ac-title'>为他人开户情况</h2>
                <Table columns={columns}
                       loading={loading}
                       rowKey={item=>item.id}
                       pagination={false}
                       locale={{emptyText: '当前没有提交开户资料'}}
                       dataSource={dataSource} />
            </div>
        )
    }
}

