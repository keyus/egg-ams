<template>
    <a-modal
            title="处理开户"
            cancelText="取消"
            okText="确认"
            destroyOnClose
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
    >
        <div class="pop">
            <a-alert message="请记得为会员绑定交易商账号，通知会员交易账号及密码"
                     type="warning"
                     showIcon
                     v-if="status === 1"
                     style="margin-bottom: 15px" />
            <a-form :form="form">
                <a-form-item style="display: none">
                    <a-input  type="hidden" v-decorator="[ 'id',{initialValue: data.id}, ]"/>
                </a-form-item>
                <a-form-item style="display: none">
                    <a-input type="hidden" v-decorator="['memberId',{initialValue: data.memberId}, ]"/>
                </a-form-item>
                <a-form-item style="display: none">
                    <a-input type="hidden" v-decorator="[ 'platformId',{initialValue: data.platformId}, ]"/>
                </a-form-item>
                <a-form-item style="display: none">
                    <a-input type="hidden" v-decorator="[ 'accountName',{initialValue: data.name}, ]"/>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="姓名"
                >
                    <span>{{data.name}}</span>
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
                        label="状态"
                >
                    <a-select
                            @change="changeStatus"
                            v-decorator="[
                              'status',{
                                  rules: [{ required: true, message: '请选择状态' }]
                              }
                            ]"
                            placeholder="请选择状态"
                    >
                        <a-select-option :value="1">开户成功</a-select-option>
                        <a-select-option :value="2">开户失败</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                        v-if="status === 1"
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="交易账号"
                >
                    <a-input
                            maxlength="32"
                            v-decorator="[
          'account',{
            rules: [{ required: true, message: '请输入交易账号' }]
          }]"
                            placeholder="请输入交易商账号"
                    />
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
                status: 0,
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
                    await this.$http.put(`/openAccount/${this.data.id}`, values);
                    this.$message.success('处理成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    console.warn(e)
                    this.confirmLoading = false;
                }
            },
            changeStatus(val){
                this.status = val;
            }
        },
    }
</script>
