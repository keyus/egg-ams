<template>
    <div class="login-wrapper">
    <a-form
            :form="form"
            class="login-form"
            @submit="handleSubmit"
    >
        <a-form-item>
            <div class="login-top">
            <img src="../assets/logo-2.png" alt="">
            <h2>登陆到后台</h2>
            </div>
        </a-form-item>
        <a-form-item>
            <a-input
                    v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入用户名' }] }
        ]"
                    placeholder="请输入用户名"
            >
                <a-icon
                        slot="prefix"
                        type="user"
                        style="color: rgba(0,0,0,.25)"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-input
                    v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码' }] }
        ]"
                    type="password"
                    placeholder="请输入密码"
            >
                <a-icon
                        slot="prefix"
                        type="lock"
                        style="color: rgba(0,0,0,.25)"
                />
            </a-input>
        </a-form-item>
        <a-form-item>
            <a-checkbox
                    v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          }
        ]"
            >
                记住密码
            </a-checkbox>
            <a
                    class="login-form-forgot"
                    href="javascript:;"
            >
                忘记密码？
            </a>
            <a-button
                    type="primary"
                    :loading="loading"
                    html-type="submit"
                    class="login-form-button"
            >
                登 录
            </a-button>

        </a-form-item>
    </a-form>
    </div>
</template>


<script>
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                loading: false,
            }
        },
        beforeCreate() {
            this.form = this.$form.createForm(this);
        },
        methods: {
            ...mapMutations(['updateUser']),
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (err) return ;
                    this.loading = true;
                    this.fetch(values);
                });
            },
            async fetch(values){
                try{
                    const res = await this.$http.post('/auth', values);
                    this.updateUser({
                        user: res.user,
                        token: res.token,
                    });
                    this.$message.success('登陆成功！');
                    this.$router.push('/')
                    this.loading = false;
                }catch (e) {
                    console.warn(e)
                    this.loading = false;
                }
            },
        },
    };
</script>
<style lang="scss">
    .login-wrapper{
        height: 100%;
        position: relative;
        background: #eee;
    }
    .login-form {
        width: 300px;
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translate(-50%,-30%);

        .login-form-forgot{
            float: right;
        }
    }
    .login-form .login-form-button {
        width: 100%;
    }
    .login-top{
        text-align: center;
        h2{
            padding-top: 20px;
            color: #212529;
        }
    }
</style>
