<template>
    <a-modal
            title="绑定交易账号"
            cancelText="取消"
            okText="确认"
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
          'accountName',{initialValue: data.name},
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
                        label="交易商"
                >
                    <a-select
                            v-decorator="[
          'platformId',{
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
                    <a-input
                            v-decorator="[
          'account',{
            rules: [
                { required: true, message: '请输入需要绑定的交易账号' },
            ]
          }]"
                    />
                </a-form-item>
            </a-form>
        </div>
    </a-modal>

</template>

<script>
    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 18},
    };
    export default {
        name: 'addTradeAccount',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            data: {
                type: Object,
            }
        },
        watch:{
            visible(val){
                if(val){
                    this.fetchPlatform();
                }
            }
        },
        data() {
            return {
                confirmLoading: false,
                formItemLayout,
                form: this.$form.createForm(this),
                platform: [],
            }
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (err) return;
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
                    await this.$http.post(`/memberTraderAccount`, values);
                    this.$message.success('交易账号绑定成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    this.confirmLoading = false;
                }
            },

        },
    }
</script>
