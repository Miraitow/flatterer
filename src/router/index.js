import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Shouye from '../views/home/shouye.vue'
import Xiangshi from '../views/home/xiangshi.vue'
import Xiangfeng from '../views/home/xiangfeng.vue'
import Xiangai from '../views/home/xiangai.vue'
import End from '../views/home/end.vue'
import Say from '../views/home/say.vue'
import Xinnian from '../views/home/xinnian.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shouye',
        name: 'Shouye',
        component: Shouye
    },
    {
        path: '/xiangshi',
        name: 'Xiangshi',
        component: Xiangshi
    },
    {
        path: '/xiangfeng',
        name: 'Xiangfeng',
        component: Xiangfeng
    },
    {
        path: '/xiangai',
        name: 'Xiangai',
        component: Xiangai
    },
    {
        path: '/end',
        name: 'End',
        component: End
    },
    {
        path: '/say',
        name: 'Say',
        component: Say
    },
    {
        path: '/xinnian',
        name: 'Xinnian',
        component: Xinnian
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router