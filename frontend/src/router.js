import Vue from 'vue'
import Router from 'vue-router'
import util from './util'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Cat from './views/cat/Cat'
import MoneyDetails from './views/moneyDetails/MoneyDetails'
import Platform from './views/platform/Platform'
import Member from './views/member/Member'
import MemberTraderAccount from './views/memberTraderAccount'
import ArticleList from './views/articleList'
import OpenAccount from './views/openAccount'
import Withdraw from './views/withdraw'
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
    },{
        path: '/platform',
        name: '交易商',
        icon: 'deployment-unit'
    },
    {
        path: '/member',
        name: '会员',
        icon: 'team'
    },
    {
        path: '/memberTraderAccount',
        name: '交易账号',
        icon: 'bulb'
    },
    {
        path: '/moneyDetails',
        name: '资金明细',
        icon: 'pay-circle'
    },
    {
        path: '/openAccount',
        name: '开户处理',
        icon: 'security-scan'
    },
    {
        path: '/verified',
        name: '实名认证处理',
        icon: 'idcard'
    },
    {
        path: '/withdraw',
        name: '提现处理',
        icon: 'money-collect'
    },
    {
        path: '/users',
        name: '管理员',
        icon: 'robot'
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
                },{
                    path: '/platform',
                    name: 'platform',
                    component: Platform
                },{
                    path: '/member',
                    name: 'member',
                    component: Member
                },{
                    path: '/memberTraderAccount',
                    name: 'memberTraderAccount',
                    component: MemberTraderAccount
                },{
                    path: '/moneyDetails',
                    name: 'moneyDetails',
                    component: MoneyDetails
                },{
                    path: '/openAccount',
                    name: 'openAccount',
                    component: OpenAccount
                },{
                    path: '/withdraw',
                    name: 'withdraw',
                    component: Withdraw
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
