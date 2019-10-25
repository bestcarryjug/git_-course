import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: '',
        component: () => import('./views/index/index.vue'),
        meta: {
            title: '首页'
        }

    },

    {
        path: '/search',
        name: 'search',
        component: () => import('./views/search/search.vue')
    },
    {
        path: '/search_detail/:value',
        name: 'search_detail',
        component: () => import('./views/search/search_detail.vue')
    },
    {
        path: '/entrance_title',
        name: 'entrance_title',
        component: () => import('./views/entrance_title/entrance_title.vue'),
        meta: {
            title: '校园主题应用'
        },

        children: [{
            path: '/titleAppaction/:themeCode',
            name: 'titleAppaction',
            component: () => import('./views/titleAppaction/titleAppaction.vue'),
            meta: {
                title: '校园主题应用'
            }
        },
        {
            path: '/allApplications/:themeCode',
            name: 'allApplications',
            component: () => import('./views/allApplications/allApplications.vue'),
            meta: {
                title: '校园主题应用'
            }
        },
        {
            path: '/onceApplication/:themeCode',
            name: 'onceApplication',
            component: () => import('./views/onceApplication/onceApplication.vue'),
            meta: {
                title: '校园主题应用'
            }
        },
        {
            path: '/icon_all/:themeCode',
            name: 'icon_all',
            component: () => import('./views/icon_all/icon_all.vue'),
            meta: {
                title: '校园主题应用'
            }
        },
        {
            path: '/leaverMessage',
            name: 'leaverMessage',
            component: () => import('./views/leaverMessage/index.vue'),
            meta: {
                title: ''
            }
        },
        {
            path: '/datils/:appCode',
            name: 'datils',
            component: () => import('./views/datils/index.vue'),
            meta: {
                title: ''
            }
        }

        ]
    }

    ]
})
router.beforeEach((to, from, next) => {
    // 登录权限
    // 路由发生变化修改页面title
    document.title = to.meta.title || '应用商店';
    next()
})

export default router