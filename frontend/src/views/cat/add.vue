<template>
    <a-modal
            title="添加分类"
            cancelText="取消"
            okText="确认"
            destroyOnClose
            :visible="visible"
            width="95%"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
    >
        <div class="pop">
            <a-form :form="form">
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="名称"
                >
                    <a-input
                            v-decorator="[
          'name',
          {
            rules: [{ required: true, message: '请输入分类名称' }]
          },
        ]"
                            placeholder="请输入分类名称"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="导航栏"
                >
                    <a-switch checkedChildren="开"
                              unCheckedChildren="关"
                              v-decorator="['is_nav', {
                        valuePropName: 'checked'
                    }]" />
                </a-form-item>
                <a-row>
                    <a-col :span="4"></a-col>
                    <a-col :span="20">
                        <a href="javascript:;"
                           style="display: inline-block;padding: 0 15px 15px 0"
                           @click="showMore = !showMore">
                            {{
                            showMore ? '收起配置' : '更多设置'
                            }}
                            <a-icon type="caret-up" v-if="showMore" />
                            <a-icon type="caret-down" v-else />
                        </a>
                    </a-col>
                </a-row>
                <div v-show="showMore">
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="分类图"
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
                            label="列表显示"
                    >
                        <a-switch checkedChildren="开"
                                  unCheckedChildren="关"
                                  v-decorator="['is_list', {
                        valuePropName: 'checked'
                    }]" />
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="内容"
                    >
                        <div class="editor"
                             ref="editor"></div>
                    </a-form-item>
                    <a-form-item
                            :label-col="formItemLayout.labelCol"
                            :wrapper-col="formItemLayout.wrapperCol"
                            label="排序"
                    >
                        <a-input
                                maxlength="9"
                                v-decorator="[
          'sorter',
          {
            initialValue: 50,
            rules: [
            { required: true, message: '请输入排序' },
            { pattern:  /^\d+$/, message: '排序为整数' },
            ]
          },
        ]"
                                placeholder="排序"
                        />
                    </a-form-item>
                </div>

            </a-form>
        </div>
    </a-modal>

</template>
<style>
    .upload-list-inline  .ant-upload-list-item {
        float: left;
        width: 200px;
        margin-right: 8px;
    }
    .upload-list-inline  .ant-upload-animate-enter {
        animation-name: uploadAnimateInlineIn;
    }
    .upload-list-inline  .ant-upload-animate-leave {
        animation-name: uploadAnimateInlineOut;
    }
</style>
<script>
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
                editorContent: '',
                showMore: false,

                uploadImgServer: this.$uploadImgServer,
                previewVisible: false,
                previewImage: '',
                fileList: [],
            }
        },
        watch: {
            visible(val){
                if(val){
                    this.$nextTick(()=>{
                        this.editor = this.$initEditor(this.$refs.editor);
                    })
                }
            }
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (err) return;
                    values.content =  this.editor.txt.html();
                    values.banner =  this.fileList.length ? this.fileList[0].url : '';
                    this.fetch(values);
                });
            },
            handleCancel() {
                this.$emit('update:visible', false);
            },
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.post(`/cat`, values);
                    this.$message.success('添加成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    this.confirmLoading = false;
                }
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
        },
    }
</script>
