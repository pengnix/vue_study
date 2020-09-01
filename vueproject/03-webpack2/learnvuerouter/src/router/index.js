import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../components/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/about',
        component:About
    }
]

const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'active'
})

export default router