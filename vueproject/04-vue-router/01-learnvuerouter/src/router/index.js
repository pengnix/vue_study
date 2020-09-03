import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNew = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNew
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: About,
    beforeEnter:(to, from, next) => {
      // console.log("beforeRouteEnter")
      next()
    }
  },
  {
    path: '/user/:userId',
    meta: {
      title: '用户'
    },
    component: User
  },
  {
    path: '/profile',
    meta: {
      title: '档案'
    },
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
//全局
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
  // console.log("beforeEach")
})
//全局
router.afterEach((to, from) => {
  // console.log("afterEach")
})

export default router
