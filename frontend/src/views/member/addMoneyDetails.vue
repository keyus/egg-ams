<template>
    <a-modal
            title="入账"
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
            <a-form :form="form">
                <a-form-item style="display: none">
                    <a-input
                            type="hidden"
                            v-decorator="[
          'memberId',{initialValue: data.id},
        ]"
                    />
                </a-form-item>
                <a-form-item style="display: none">
                    <a-input
                            type="hidden"
                            v-decorator="[
          'memberPhone',{initialValue: data.phone},
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
                        label="入账类型"
                >
                    <a-select
                            @change="changeEntryType"
                            v-decorator="[
          'entryType',{
            initialValue: this.entryType,
            rules: [
                { required: true, message: '请选择入账类型' },
            ]
          }
        ]"
                            placeholder="请选择入账类型"
                    >
                        <a-select-option :value="0">系统派送</a-select-option>
                        <a-select-option :value="1">佣金入账</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="金额"
                >
                    <a-input
                            placeholder="金额"
                            v-decorator="[
          'money',{
            rules: [
                { required: true, message: '请输入金额' },
                { pattern: reg.money, message: '金额必须是一个数字' },
            ]
          }]"
                    />
                </a-form-item>
                <a-form-item :label-col="formItemLayout.labelCol"
                             :wrapper-col="formItemLayout.wrapperCol"
                             label="入账日期">
                    <a-date-picker style="width: 100%"
                                   placeholder="请选择入账日期"
                                   format="YYYY-MM-DD"
                                   v-decorator="[
                                   'moneyDate', {
                                        rules: [{ type: 'object', required: true, message: '请选择入账时间' }],
                                    }
                                ]"/>
                </a-form-item>
                <div v-if="entryType">
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="交易商"
                    >
                        <a-select
                                @change="changePlatformId"
                                v-decorator="[
          'platformId',{
            initialValue: this.platformId,
            rules: [
                { required: true, message: '请选择交易商' },
            ]
        },
        ]"
                                placeholder="选择交易商"
                        >
                            <a-select-option :value="it.id" v-for="it in platform">{{it.name}}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="交易账号"
                    >
                        <a-select
                                v-decorator="[
                                  'account',{
                                    initialValue: undefined,
                                    rules: [
                                        { required: true, message: '请选择交易账号' },
                                    ]
                                  }
                                ]"
                                placeholder="请选择交易账号"
                        >
                            <a-select-option :value="it.id" v-for="it in accountList">{{it.account}}</a-select-option>
                        </a-select>
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="交易品种合集"
                    >
                        <a-input
                                placeholder="交易品种合集"
                                v-decorator="[
                                  'tradeProduct',]"
                                />
                    </a-form-item>
                </div>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="备注"
                >
                    <a-input
                            placeholder="备注"
                            v-decorator="[
                              'note',{
                                rules: [
                                    { required: true, message: '请填写备注' },
                                ]
                              }]"
                    />
                </a-form-item>
            </a-form>
        </div>
    </a-modal>

</template>

<script>
    import moment from 'moment'
    import {reg} from '../../util'
    import bank from '../../util/bank'

    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 18},
    };
    export default {
        name: 'addMoneyDetails',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            data: {
                type: Object,
            }
        },
        data() {
            return {
                confirmLoading: false,
                formItemLayout,
                form: this.$form.createForm(this),
                payType: 0,
                reg,
                bank,
                platform: [],       //交易商
                account: [],        //交易账号
                entryType: 1,       //入账方式
                platformId: undefined,      //交易商ID
            }
        },
        computed: {
            accountList(){
                return this.account.filter(it=>it.platformId === this.platformId)
            }
        },
        watch:{
            visible(val){
                if(val){
                    this.fetchPlatform();
                    this.fetchAccount()
                }else{
                    this.platform = []
                }
            },
            platformId(){
                this.form.setFieldsValue({
                    account: undefined,
                })
            }
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (err) return;
                    values.moneyDate = moment(values.moneyDate).format('YYYY-MM-DD')
                    this.fetch(values);
                });
            },
            handleCancel() {
                this.$emit('update:visible', false);
            },
            async fetchPlatform() {
                try {
                    const res = await this.$http.get('/platform');
                    this.platform = res.data;
                } catch (e) {

                }
            },
            async fetchAccount() {
                try {
                    const res = await this.$http.get('/memberTraderAccount',{
                        params: {
                            id: this.data.id,
                        }
                    });
                    this.account = res.data;
                } catch (e) {}
            },
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.post('/moneyDetails', values);
                    this.$message.success('入账成功')
                    this.handleCancel();
                    this.confirmLoading = false;
                } catch (e) {
                    this.confirmLoading = false;
                }
            },
            changeEntryType(val) {
                this.entryType = val;
            },
            changePlatformId(val){
                this.platformId = val;
            }

        },
    }
</script>
