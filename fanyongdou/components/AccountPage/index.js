import React, {Component} from 'react'
import {Table} from 'antd'
import columns from './columns'

export default class AccountPage extends Component {
    render() {
        return (
            <>
                <div className='ff-table'>
                    <Table columns={columns} dataSource={[]} />
                </div>
            </>
        )
    }
}
