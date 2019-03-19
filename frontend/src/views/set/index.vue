<template>
    <div class="page">
        <a-menu
                v-model="current"
                mode="horizontal"
        >
            <a-menu-item key="Site">
                <a-icon type="global" />网站配置
            </a-menu-item>
            <a-menu-item key="FriendLink">
                <a-icon type="link" />友情链接
            </a-menu-item>
            <a-menu-item key="Slider">
                <a-icon type="picture" />首页轮播图
            </a-menu-item>
        </a-menu>
        <div class="page-main"><component :is="activeMenu"></component></div>
    </div>
</template>
<script>
    import Site from './com/Site'
    import FriendLink from './com/FriendLink'
    import Slider from './com/Slider'
    export default {
        name: 'set',
        components:{
            Site,
            FriendLink,
            Slider,
        },
        computed: {
            activeMenu() {
                console.log(this.current[0])
                return this.current[0];
            }
        },
        data() {
            return {
                current: ['Site'],
            }
        },
        methods: {

        },
    }
</script>
