<template>
    <a-modal
            title="编辑会员"
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
               <a-form-item>
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
                        label="重置密码"
                >
                    <a-input
                            type="password"
                            placeholder="如不修改密码则不填写"
                            v-decorator="[
          'password',{
            validateFirst: true,
            rules: [
                { pattern: reg.password, message: '密码为6-20位字母或数字' },
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
                        initialValue: Boolean(data.status),
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
        name: 'Edit',
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
                    await this.$http.put(`/member/${values.id}`, values);
                    this.$message.success('修改成功')
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
