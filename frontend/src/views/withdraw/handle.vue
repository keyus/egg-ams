<template>
    <a-modal
            title="处理提现记录"
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
          'id',{initialValue: data.id},
        ]"/>
                </a-form-item>
                <a-form-item style="display: none">
                    <a-input
                            type="hidden"
                            v-decorator="[
          'money',{initialValue: data.money},
        ]" />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="会员账号"
                >
                    <span>{{data.memberPhone}}</span>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="提现金额"
                >
                    <span>{{data.money | money}}</span>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="状态"
                >
                    <a-select
                            v-decorator="[
                              'status',{
                                  rules: [{ required: true, message: '请选择状态' }]
                              }
                            ]"
                            placeholder="请选择状态"
                    >
                        <a-select-option :value="1">提现成功</a-select-option>
                        <a-select-option :value="2">提现失败</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="备注"
                >
                    <a-input
                            maxlength="15"
                            v-decorator="[
          'note']"
                            placeholder="备注原因:最大15个字符"
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
        name: 'Handle',
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
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.put(`/withdraw/${this.data.id}`, values);
                    this.$message.success('处理成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    console.warn(e)
                    this.confirmLoading = false;
                }
            },
        },
    }
</script>
