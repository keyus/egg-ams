<template>
    <a-modal
            title="注册会员"
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
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="手机号"
                >
                    <a-input
                            maxlength="11"
                            v-decorator="[
          'phone',
          {
            rules: [
                { required: true, message: '请输入手机号' },
                { pattern: reg.phone, message: '手机号码格式错误' },
            ]
          },
        ]"
                            placeholder="请输入手机号"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="登录密码"
                >
                    <a-input
                            type="password"
                            v-decorator="[
          'password',{
            validateFirst: true,
            rules: [
                { required: true, message: '请输入登录密码' },
                { pattern: reg.password, message: '密码为6-20位字母或数字' },
                { validator: validateToNextPassword },
            ]
          }]"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="确认密码"
                >
                    <a-input
                            type="password"
                            v-decorator="[
          'passwordConfirm',{
            rules: [
                { required: true, message: '请再次输入密码' },
                {validator: compareToFirstPassword},
            ]
          }]"
                    />
                </a-form-item>

                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="账号状态"
                >
                    <a-switch checkedChildren="启用"
                              unCheckedChildren="停用"
                              v-decorator="['status', {
                        valuePropName: 'checked',
                        initialValue: true,
                    }]"/>
                </a-form-item>
            </a-form>
        </div>
    </a-modal>

</template>

<script>
    import {reg} from '../../util'

    const formItemLayout = {
        labelCol: {span: 4},
        wrapperCol: {span: 18},
    };
    export default {
        name: 'add',
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
                reg,
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
                    await this.$http.post(`/member`, values);
                    this.$message.success('添加成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    this.confirmLoading = false;
                }
            },
            handlePreview(file) {
                this.previewImage = file.url || file.thumbUrl
                this.previewVisible = true
            },
            validateToNextPassword(rule, value, callback, d) {
                const form = this.form;
                console.log('rule:', arguments)
                if (value) {
                    form.validateFields(['passwordConfirm'], {force: true});
                }
                callback();
            },
            compareToFirstPassword(rule, value, callback) {
                const form = this.form;
                if (value && value !== form.getFieldValue('password')) {
                    callback('两次输入密码不一致');
                } else {
                    callback();
                }
            },
        },
    }
</script>
