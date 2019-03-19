import Vue from 'vue'
import Router from 'vue-router'
import util from './util'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Cat from './views/cat/Cat'
import ArticleList from './views/articleList'
import Users from './views/users'
import Set from './views/set'

Vue.use(Router)

export const menus = [
    {
        path: '/articleList',
        name: '文章',
        icon: 'read'
    },
    {
        path: '/cat',
        name: '分类',
        icon: 'project'
    },
    {
        path: '/users',
        name: '管理',
        icon: 'usergroup-delete'
    },
    {
        path: '/set',
        name: '设置',
        icon: 'setting'
    },
]

const router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { requiresAuth: true },
            redirect: '/articleList',
            children: [
                {
                    path: '/articleList',
                    name: 'articleList',
                    component: ArticleList
                },
                {
                    path: '/cat',
                    name: 'cat',
                    component: Cat
                },{
                    path: '/users',
                    name: 'users',
                    component: Users
                },{
                    path: '/set',
                    name: 'set',
                    component: Set
                },
            ]
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import('./views/Login.vue'),
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(it=>it.meta.requiresAuth)){
        if(util.isLogin()){
            next();
        }else{
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    }else{
        next();
    }
})

export default router;
