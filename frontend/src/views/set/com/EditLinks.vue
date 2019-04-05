<template>
        <a-modal
                title="编辑友情链接"
                cancelText="取消"
                okText="确认"
                destroyOnClose
                :visible="visible"
                :confirmLoading="confirmLoading"
                @ok="handleOk"
                @cancel="handleCancel"
        >
            <div class="pop">
                <a-form :form="form">
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                    >
                        <a-input
                                type="hidden"
                                v-decorator="[
          'id',
          {initialValue: data.id}
        ]"
                        />
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="链接名称"
                    >
                        <a-input
                                v-decorator="[
          'name',
          {
            initialValue: data.name,
            rules: [{ required: true, message: '请输入链接名称' }]
          },
        ]"
                                placeholder="请输入链接名称"
                        />
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="链接URL"
                    >
                        <a-input
                                v-decorator="[
          'url',
          {
          initialValue: data.url,
            rules: [{ required: true, message: '请输入链接URL' }]
          },
        ]"
                                placeholder="请输入链接URL"
                        />
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="链接logo"
                    >
                        <a-upload
                                :action="uploadImgServer"
                                listType="picture"
                                :fileList="fileList"
                                class="upload-list-inline"
                                @preview="handlePreview"
                                @change="handleChange"
                        >
                            <a-button>
                                <a-icon type="upload" /> 上传
                            </a-button>
                        </a-upload>
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="refollow"
                    >
                        <a-switch checkedChildren="开"
                                  unCheckedChildren="关"
                                  v-decorator="['refollow', {
                        valuePropName: 'checked',
                        initialValue: Boolean(data.refollow),
                    }]" />
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="排序"
                    >
                        <a-input
                                v-decorator="[
          'sorter',
          {
            initialValue: data.sorter,
            rules: [
            { required: true, message: '请输入排序' },
            { pattern:  /^\d+$/, message: '排序为整数' },
            ]
          },
        ]"
                                placeholder="请输入排序"
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
        name: "EditLinks",
        props: {
            visible: {
                type: Boolean,
                default: false,
            },
            data: {
                type: Object,
            }
        },
        watch: {
            visible(val){
                if(val){
                    this.fileList = this.data.img ? [
                        {
                            uid: -1,
                            name: 'logo',
                            status: 'done',
                            url: this.data.img,
                        }
                    ] : [];
                }
            }
        },
        data() {
            return {
                confirmLoading: false,
                formItemLayout,
                fileList: [],
                uploadImgServer: this.$uploadImgServer,
                previewVisible: false,
                previewImage: '',
                form: this.$form.createForm(this),
            }
        },
        methods: {
            async handleOk() {
                this.form.validateFields(async (err, values) => {
                    if (err) return;
                    this.confirmLoading = true;
                    values.img =  this.fileList.length ? this.fileList[0].url : '';
                    try {
                        await this.$http.put(`/friendlink/${values.id}`, values);
                        this.confirmLoading = false;
                        this.handleCancel();
                        this.$emit('put');
                        this.$message.success('修改成功')
                    } catch (e) {
                        this.confirmLoading = false;
                    }
                });
            },
            handleCancel() {
                this.$emit('update:visible', false);
            },
            handlePreview (file) {
                this.previewImage = file.url || file.thumbUrl
                this.previewVisible = true
            },
            handleChange ({ fileList }) {
                let status = true;
                fileList.forEach(it=>{
                    if(it.status === 'done' && it.response){
                        status = false;
                        this.fileList =  [{
                            ...it,
                            url: it.response.data[0],
                        }]
                    }
                })
                if(status) this.fileList = fileList;
            },
        }
    }
</script>
