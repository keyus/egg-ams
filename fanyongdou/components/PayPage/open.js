import React, {Component} from 'react'
import {Switch} from 'antd'
import {message} from "antd/lib/index";
import {updatePay} from "../../api";

export default class Open extends Component {
    static defaultProps ={
        user: {}
    }
    changeAlipay=(val)=>{
        let {
            bankActive,
            alipayActive,
        } = this.props.user;
        if(val){
            alipayActive = true;
            bankActive = false;
        }else{
            alipayActive = false;
        }
        this.fetch({
            bankActive,
            alipayActive,
        })
    }
    changeBank = (val)=>{
        let {
            bankActive,
            alipayActive,
        } = this.props.user;
        if(val){
            bankActive = true;
            alipayActive = false;
        }else{
            bankActive = false;
        }
        this.fetch({
            bankActive,
            alipayActive,
        })
    }
    fetch =async (values)=>{
        this.setState({
            loading: true,
        })
        try {
            await updatePay('payType',values);
            message.success('保存成功');
            this.updateStorage(values);
            this.setState({
                loading: false,
            })
        }catch (e) {
            this.setState({
                loading: false,
            })
        }
    }
    updateStorage=(values)=>{
        const user = {...this.props.user};
        user.bankActive = values.bankActive;
        user.alipayActive = values.alipayActive;
        localStorage.setItem('member', JSON.stringify(user));
        this.props.updateUser(user);
    }
    render() {
        const {
            user,
        } = this.props;
        const {
            alipayActive,
            bankActive,
        } = user;
        return (
            <>
                <div className='pay-fast'>
                    <div><img src='/static/images/pi_zhifubao.png'/></div>
                    <div className='item-auto'>
                        <p className='name'>支付宝</p>
                        <p>
                           <span>{user.alipay || '未设置支付宝收款方式'}</span>
                        </p>
                    </div>
                    <div>
                        <Switch checkedChildren="开"
                                unCheckedChildren="关"
                                disabled={!user.alipay}
                                onChange={this.changeAlipay}
                                checked={Boolean(alipayActive)}
                                defaultChecked/>
                    </div>
                </div>
                <div className='pay-fast'>
                    <div><img src='/static/images/pi_bankcard.png'/></div>
                    <div className='item-auto'>
                        <p className='name'>银行卡</p>
                        <p>
                            {
                                user.bankName &&
                                <span style={{marginRight: '12px'}}>{user.bankName}</span>
                            }
                            <span>{user.bankAccount || '未设置银行卡收款方式'}</span>
                        </p>
                    </div>
                    <div>
                        <Switch checkedChildren="开"
                                unCheckedChildren="关"
                                onChange={this.changeBank}
                                disabled={!user.bankCode}
                                checked={Boolean(bankActive)}
                                defaultChecked/>
                    </div>
                </div>
            </>
        )
    }
}
