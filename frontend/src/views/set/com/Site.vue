<template>
    <div class="site">
        <a-form>
            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="网站名称"
            >
                <a-input/>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="网站Logo"
            >
                <div class="dropbox">
                    <a-upload-dragger
                            v-decorator="['dragger', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          }]"
                            name="files"
                            action="/upload.do"
                    >
                        <p class="ant-upload-drag-icon">
                            <a-icon type="inbox" />
                        </p>
                        <p class="ant-upload-text">
                            点击上传图片 jpg,jpeg,png,gif 1M以内
                        </p>
                    </a-upload-dragger>
                </div>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="网站标题"
            >
                <a-input placeholder="seo标题"/>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="网站描述"
            >
                <a-input placeholder="网站描述100字左右"/>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="网站关键字"
            >
                <a-input placeholder="多个关键字，请使用'，'逗号分开" />
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="公司地址"
            >
                <a-input />
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="客服QQ"
            >
                <a-input placeholder="多个QQ使用 '|' 竖线分隔"/>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="客服邮件地址"
            >
                <a-input/>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="联系电话"
            >
                <a-input/>
            </a-form-item>

            <a-form-item
                    :label-col="labelCol"
                    :wrapper-col="wrapperCol"
                    label="icp备案号"
            >
                <a-input/>
            </a-form-item>

            <a-form-item :label-col="labelCol"
                         label=" "
                         :colon="false"
                         :wrapper-col="wrapperCol">
                <a-button
                        type="primary"
                        html-type="submit"
                >
                    Submit
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        name: "Site",
        data () {
            return {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 5 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 12 },
                },
            };
        },
        methods: {
            normFile  (e) {
                console.log('Upload event:', e);
                if (Array.isArray(e)) {
                    return e;
                }
                return e && e.fileList;
            },
        }
    }
</script>
