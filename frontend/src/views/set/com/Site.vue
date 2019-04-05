<template>
    <div class="site">
        <a-spin :spinning="loading">
            <a-form :form="form">
                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="网站名称"
                >
                    <a-input v-decorator="['site_name', {
            initialValue: site.site_name,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="网站Logo"
                >
                    <div class="dropbox">
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
                    </div>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="网站标题"
                >
                    <a-input placeholder="seo标题"
                             v-decorator="['site_title', {
            initialValue: site.site_title,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="网站描述"
                >
                    <a-input placeholder="网站描述100字左右"
                             v-decorator="['site_desc', {
            initialValue: site.site_desc,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="网站关键字"
                >
                    <a-input placeholder="多个关键字，请使用'，'逗号分开"
                             v-decorator="['site_keywords', {
            initialValue: site.site_keywords,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="公司地址"
                >
                    <a-input v-decorator="['address', {
            initialValue: site.address,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="客服QQ"
                >
                    <a-input placeholder="多个QQ使用 '|' 竖线分隔"
                             v-decorator="['qq', {
            initialValue: site.qq,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="客服邮件地址"
                >
                    <a-input v-decorator="['site_email', {
            initialValue: site.site_email,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="联系电话"
                >
                    <a-input v-decorator="['phone', {
            initialValue: site.phone,
          }]"/>
                </a-form-item>

                <a-form-item
                        :label-col="labelCol"
                        :wrapper-col="wrapperCol"
                        label="icp备案号"
                >
                    <a-input v-decorator="['icp', {
            initialValue: site.icp,
          }]"/>
                </a-form-item>

                <a-form-item :label-col="labelCol"
                             label=" "
                             :colon="false"
                             :wrapper-col="wrapperCol">
                    <a-button
                            :loading="loading"
                            @click="submit"
                            type="primary"
                            html-type="submit"
                    >
                        确认提交
                    </a-button>
                </a-form-item>
            </a-form>
        </a-spin>
    </div>
</template>

<script>
    export default {
        name: "Site",
        data() {
            return {
                form: this.$form.createForm(this),
                uploadImgServer: this.$uploadImgServer,
                fileList: [],
                previewVisible: false,
                previewImage: '',
                loading: false,
                labelCol: {
                    xs: {span: 24},
                    sm: {span: 5},
                },
                wrapperCol: {
                    xs: {span: 24},
                    sm: {span: 12},
                },
                site: {}
            };
        },
        mounted() {
            this.fetch();
        },
        methods: {
            async fetch() {
                this.loading = true;
                try {
                    const res = await this.$http.get('/site');
                    this.loading = false;
                    this.site = res.data || {};
                    this.fileList = res.data.site_logo ? [
                        {
                            uid: -1,
                            name: 'logo',
                            status: 'done',
                            url: res.data.site_logo,
                        }
                    ] : [];
                } catch (e) {
                    this.loading = false;
                }
            },
            submit() {
                this.form.validateFields(async (err, values) => {
                    if (err) return;
                    values.site_logo = this.fileList.length ? this.fileList[0].url : '';
                    this.loading = true;
                    try {
                        this.$http.post('/site', values);
                        this.$message.success('更新成功')
                        this.loading = false;
                    } catch (e) {
                        this.loading = false;
                    }
                });
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
        }
    }
</script>
