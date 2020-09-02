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
      {
        path: '',
        redirect: 'news'
      },
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
    component: About
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

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
