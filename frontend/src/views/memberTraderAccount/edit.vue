<template>
    <a-modal
            title="编辑文章"
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
                <a-form-item>
                    <a-input
                            type="hidden"
                            v-decorator="[
          'id',{initialValue: data.id},
        ]"
                    />
                </a-form-item>
                <a-form-item>
                    <a-input
                            type="hidden"
                            v-decorator="[
          'content_id',{initialValue: data.content_id},
        ]"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="标题"
                >
                    <a-input
                            v-decorator="[
          'title',
          {
            initialValue: data.title,
            rules: [{ required: true, message: '请输入文章标题' }]
          },
        ]"
                            placeholder="请输入文章标题"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="所属分类"
                >
                    <a-select
                            v-decorator="[
          'cat_id',{
            initialValue: data.cat_id || ''
          }
        ]"
                            placeholder="请选择分类"
                    >
                        <a-select-option value="">全部分类</a-select-option>
                        <a-select-option :value="it.id" :data-id="it.id" v-for="it in cat">{{it.name}}</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="作者"
                >
                    <a-input
                            v-decorator="[
          'author',
          {
          initialValue: data.author,
          }
        ]"
                            placeholder="请输入文章作者"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="来源"
                >
                    <a-input
                            v-decorator="[
          'fromto',{
          initialValue: data.fromto,
          }
        ]"
                            placeholder="请输入文章来源"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="是否热门"
                >
                    <a-switch checkedChildren="开"
                              unCheckedChildren="关"
                              v-decorator="['hot', {
                        initialValue: Boolean(data.hot),
                        valuePropName: 'checked'
                    }]"/>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="文章封面图"
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
                            <a-icon type="upload"/>
                            上传
                        </a-button>
                    </a-upload>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="文章简介"
                >
                    <a-textarea placeholder="文章简介"
                                v-decorator="[
          'intro',{
          initialValue: data.intro,
          }
        ]"
                                :rows="4"/>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="是否置顶"
                >
                    <a-switch checkedChildren="开"
                              unCheckedChildren="关"
                              v-decorator="['top', {
                    initialValue: Boolean(data.top),
                        valuePropName: 'checked'
                    }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="文章内容"
                >
                    <div class="editor"
                         ref="editor"></div>
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="关键字"
                >
                    <a-input
                            v-decorator="[
          'keywords',{
          initialValue: data.keywords,
          }
        ]"
                            placeholder="文章关键字,多个关键字使用逗号隔开"
                    />
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
            initialValue: data.sorter,
            rules: [
            { required: true, message: '请输入排序' },
            { pattern:  /^\d+$/, message: '排序为整数' },
            ]
          },
        ]"
                            placeholder="排序"
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
        name: 'Edit',
        props: {
            cat: {
                type: Array,
            },
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

                uploadImgServer: this.$uploadImgServer,
                previewVisible: false,
                previewImage: '',
                fileList: [],

                contentData: {},
            }
        },
        watch: {
            visible(val) {
                if (val) {
                    this.$nextTick(() => {
                        this.fileList = this.data.img ? [
                            {
                                uid: -1,
                                name: '图片',
                                status: 'done',
                                url: this.data.img,
                            }
                        ] : [];
                        this.editor = this.$initEditor(this.$refs.editor);
                        this.data.content_id && this.fetchContent();
                    })
                }
            }
        },
        methods: {
            async fetchContent(){
                try {
                    const res = await this.$http.get(`/content/${this.data.content_id}`);
                    this.editor.txt.html(res.data.content)
                }catch (e) {}
            },
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (err) return;
                    values.content = this.editor.txt.html();
                    values.cat_id = values.cat_id || null;
                    values.img = this.fileList.length ? this.fileList[0].url : '';
                    this.fetch(values);
                });
            },
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.put(`/article/${this.data.id}`, values);
                    this.$message.success('文章修改成功')
                    this.handleCancel();
                    this.$emit('put')
                    this.confirmLoading = false;
                } catch (e) {
                    this.confirmLoading = false;
                }
            },
            handleCancel() {
                this.$emit('update:visible', false);
            },
            handlePreview(file) {
                this.previewImage = file.url || file.thumbUrl
                this.previewVisible = true
            },
            handleChange({fileList}) {
                let status = true;
                fileList.forEach(it => {
                    if (it.status === 'done' && it.response) {
                        status = false;
                        this.fileList = [{
                            ...it,
                            url: it.response.data[0],
                        }]
                    }
                })
                if (status) this.fileList = fileList;
            },
        },
    }
</script>
