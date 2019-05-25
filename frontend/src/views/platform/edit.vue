<template>
    <a-modal
            title="编辑交易商"
            cancelText="取消"
            okText="确认"
            destroyOnClose
            :visible="visible"
            width="45%"
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
                        label="交易商名称"
                >
                    <a-input
                            v-decorator="[
          'name',
          {
            initialValue: data.name,
            rules: [{ required: true, message: '请输入交易商名称' }]
          },
        ]"
                            placeholder="请输入交易商名称"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="交易商logo"
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
                        label="交易商网址"
                >
                    <a-input
                            v-decorator="[
          'net',{
            initialValue: data.net,
          }]"
                            placeholder="请输入交易商名称"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="交易商简介"
                >
                    <a-textarea placeholder="交易商简介"
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
                        label="返佣周期"
                >
                    <a-input
                            v-decorator="[
          'rebateWeek',{
            initialValue: data.rebateWeek,
          }]"
                            placeholder="请输入交易商返佣周期"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="出入金方式"
                >
                    <a-input
                            v-decorator="[
          'joinMoneyType',{
            initialValue: data.joinMoneyType,
          }]"
                            placeholder="出入金方式"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="入金到账时间"
                >
                    <a-input
                            v-decorator="[
          'joinMoneyTime',{
            initialValue: data.joinMoneyTime,
          }]"
                            placeholder="入金到账时间"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="出金到账时间"
                >
                    <a-input
                            v-decorator="[
          'drawMoneyTime',{
            initialValue: data.drawMoneyTime,
          }]"
                            placeholder="出金到账时间"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="交易品种"
                >
                    <a-input
                            v-decorator="[
          'product',{
            initialValue: data.product,
          }]"
                            placeholder="交易品种"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="最小入金金额"
                >
                    <a-input
                            v-decorator="[
          'joinMinMoney',{
            initialValue: data.joinMinMoney,
          }]"
                            placeholder="最小入金金额"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="爆仓比例"
                >
                    <a-input
                            v-decorator="[
          'burstRate',{
            initialValue: data.burstRate,
          }]"
                            placeholder="爆仓比例"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="最大杠杆"
                >
                    <a-input
                            v-decorator="[
          'maxLever',{
            initialValue: data.maxLever,
          }]"
                            placeholder="最大杠杆"
                    />
                </a-form-item>
                <a-form-item
                        :label-col="formItemLayout.labelCol"
                        :wrapper-col="formItemLayout.wrapperCol"
                        label="开户资料"
                >
                    <a-input
                            v-decorator="[
          'openFile',{
            initialValue: data.openFile,
          },]"
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
                    this.fileList = this.data.logo ? [
                        {
                            uid: -1,
                            name: '图片',
                            status: 'done',
                            url: this.$img(this.data.logo),
                        }
                    ] : [];

                }
            }
        },
        methods: {
            handleOk() {
                this.form.validateFields((err, values) => {
                    if (err) return;
                    values.logo =  this.fileList.length ? this.fileList[0].url : '';
                    this.fetch(values);
                });
            },
            handleCancel() {
                this.$emit('update:visible', false);
            },
            async fetch(values) {
                this.confirmLoading = true;
                try {
                    await this.$http.put(`/platform/${values.id}`, values);
                    this.$message.success('修改成功')
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
