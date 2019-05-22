<template>
    <a-modal
            title="编辑收款信息"
            cancelText="取消"
            okText="确认"
            width="600px"
            destroyOnClose
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
    >
        <div class="pop">
            <a-alert message="仅支持绑定当前会员账号真实姓名的银行卡或支付宝" banner style="margin-bottom: 10px" />
            <a-form :form="form">
                <a-form-item style="display: none">
                    <a-input
                            type="hidden"
                            v-decorator="[
          'id',{initialValue: data.id},
        ]"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="手机号"
                >
                    {{data.phone}}
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="真实姓名"
                >
                    {{data.name}}
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="收款方式"
                >
                    <a-select
                            @change="changePayType"
                            v-decorator="[
          'payType',{
            initialValue: payType,
          }
        ]"
                            placeholder="收款方式"
                    >
                        <a-select-option :value="0">银行卡</a-select-option>
                        <a-select-option :value="1">支付宝</a-select-option>
                    </a-select>
                </a-form-item>
                <div v-if="payType === 0">
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="收款银行"
                    >
                        <a-select
                                v-decorator="[
          'bankCode',{
          initialValue: data.bankCode,
            rules: [
                { required: true, message: '选择银行' },
            ]
        },
        ]"
                                placeholder="选择银行"
                        >
                            <a-select-option :value="it.bankCode" v-for="it in bank">{{it.bankName}}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="银行卡号"
                    >
                        <a-input
                                placeholder="银行卡号"
                                maxlength="19"
                                v-decorator="[
          'bankAccount',{
                    initialValue: data.bankAccount,

            rules: [
                { required: true, message: '请输入需要绑定的银行卡号' },
                { pattern: reg.bank, message: '银行卡号为9-19位数字' },
            ]
          }]"
                        />
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="开户行"
                    >
                        <a-input
                                placeholder="如：中国银行北京市朝阳区支行"
                                v-decorator="[
          'bankAddress',{
                              initialValue: data.bankAddress,

            rules: [
                { required: true, message: '请输入开户行' },
                { pattern: reg.text, message: '开户行必须是中文' },
            ]
          }]"
                        />
                    </a-form-item>
                </div>
                <div v-if="payType === 1">

                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="支付宝账号"
                    >
                        <a-input
                                v-decorator="[
          'alipay',{
            initialValue: data.alipay,
            rules: [
                { required: true, message: '请输入需要绑定的支付宝账号' },
                { pattern: reg.alipay, message: '支付宝账号必须是手机号或邮箱' },
            ]
          }]"
                        />
                    </a-form-item>

                </div>

            </a-form>
        </div>
    </a-modal>

</template>

<script>
    import {reg} from '../../util'
    import bank from '../../util/bank'

    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 18},
    };
    export default {
        name: 'addPay',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            data: {
                type: Object,
            }
        },
        created(){
            this.fetchPlatform();
        },
        data() {
            return {
                confirmLoading: false,
                formItemLayout,
                form: this.$form.createForm(this),
                payType: 0,
                reg,
                bank,
                platform: [],
            }
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (err) return;
                    const payType = values.payType;
                    if(payType === 0){
                        const find = bank.find(it=>it.bankCode === values.bankCode);
                        values.bankName = find.bankName;
                    }
                    delete values.payType;
                    this.fetch(values);
                });
            },
            handleCancel() {
                this.$emit('update:visible', false);
            },
            async fetchPlatform(){
                try{
                    const res = await this.$http.get('/platform');
                    this.platform = res.data;
                }catch (e) {

                }
            },
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.put(`/member/${values.id}`, values);
                    this.$message.success('绑定成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    this.confirmLoading = false;
                }
            },
            changePayType (val){
                this.payType = val;
            }

        },
    }
</script>
