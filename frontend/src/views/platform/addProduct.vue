<template>
    <a-modal
            title="添加交易品种"
            cancelText="取消"
            okText="确认"
            destroyOnClose
            :visible="visible"
            width="700px"
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
              'platformId',{
                initialValue: data.id,
              }
          ]"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="交易商"
                >
                    {{data.name}}
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="交易品种名称"
                >
                    <a-input
                            v-decorator="[
            'productName',{
                rules: [
                    { required: true, message: '交易品种名称' },
                ],
            }
          ]"
                            placeholder="交易品种名称"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="点差"
                >
                    <a-input
                            v-decorator="[
            'diff'
            ]"
                            placeholder="点差"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="最大交易量"
                >
                    <a-input
                            v-decorator="[
            'maxNums',{
                rules: [
                    { pattern:  reg.num, message: '最大交易量必须是整数' },
                    ],
                }
            ]"
                            placeholder="最大交易量"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="买入手续费"
                >
                    <a-input
                            v-decorator="['buyFree']"
                            placeholder="买入手续费 如:万分之三"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="卖出手续费"
                >
                    <a-input
                            v-decorator="['sellFree']"
                            placeholder="卖出手续费 如:万分之三"
                    />
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
        name: 'AddProduct',
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
                reg,
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
                    await this.$http.post(`/platformProduct`, values);
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
