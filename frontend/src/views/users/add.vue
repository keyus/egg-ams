<template>
    <a-modal
            title="添加管理员"
            cancelText="取消"
            okText="确认"
            :visible="visible"
            destroyOnClose
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
    >
        <div class="pop">
            <a-form :form="form">
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="用户名"
                >
                    <a-input
                            v-decorator="[
          'username',
          {
            rules: [{ required: true, message: '请输入用户名' }]
          },
        ]"
                            placeholder="请输入用户名"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="密码"
                >
                    <a-input
                            v-decorator="[
          'password',{
          rules: [{ required: true, message: '请输入密码' }]
          }
        ]"
                            placeholder="请输入密码"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="确认密码"
                >
                    <a-input
                            v-decorator="[
          'confirmPassword',
          {
               rules: [
               { required: true, message: '确认密码不能为空' },
                    {
                        validator: compareToFirstPassword,
                    }
               ]
          }
        ]"
                            placeholder="确认密码"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="昵称"
                >
                    <a-input
                            v-decorator="[
          'nickname'
        ]"
                            placeholder="请输入昵称"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="备注"
                >
                    <a-input
                            v-decorator="[
          'note',
        ]"
                            placeholder="请输入备注"
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
        name: 'Add',
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
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
                this.$emit('update:visible', false)
            },
            //比较密码
            compareToFirstPassword  (rule, value, callback) {
                const form = this.form;
                const password = form.getFieldValue('password');
                if (value !== password) {
                    callback('确认密码输入不一致!');
                } else {
                    callback();
                }
            },
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.post('/user', values);
                    this.$message.success('添加成功')
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
