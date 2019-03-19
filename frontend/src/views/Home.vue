<template>
    <div class="home">
        <div class="side">
            <h1><img src="../assets/logo.png"></h1>
            <ul>
                <li v-for="it in menus">
                    <router-link active-class="active"
                                 :to="{path: it.path}">
                        <a-icon :type="it.icon" />
                        <span>{{it.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="main">
            <div class="main-top">
                <div class="main-top-left">
                    <a-breadcrumb>
                        <a-breadcrumb-item href="">
                            <a-icon type="home" />
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                            文章列表
                        </a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <div class="main-top-right">
                    <a-popover placement="bottomRight" class="main-top-user" trigger="click">
                        <template slot="content">
                            <p class="main-user-item"><a href="javascript:;"><a-icon type="lock" /> 修改密码</a></p>
                            <p class="main-user-item"><a href="javascript:;" @click="logout"><a-icon type="poweroff" /> 退出系统</a></p>
                        </template>
                        <template slot="title">
                            <span style="color: #888">用户：{{user.username}}!</span>
                        </template>
                        <a-avatar :size="39" style="backgroundColor:#22b9ff" icon="user" />
                    </a-popover>
                </div>
            </div>
            <div class="main-page">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations,mapState} from 'vuex'
    import {menus} from '../router'
    export default {
        name: 'home',
        data(){
            return {
                menus,
            }
        },
        computed:{
            ...mapState({
                user: 'user',
            })
        },
        methods:{
            ...mapMutations(['clearUser']),
            logout(){
                this.clearUser();
                this.$router.push('/login')
            }
        }
    }
</script>
