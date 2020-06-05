import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const SpecialArea = () => import('../views/specialArea/SpecialArea')
const Generalize = () => import('../views/generalize/Generalize')
const Login = () => import('../views/home/Login')
const Register = () => import('../views/home/Register')
const UserInfo = () => import('../views/userinfo/UserInfo')
const EditInfo = () => import('../views/userinfo/childs/EditInfo')
const PostDetail = () => import('../components/content/postdetail/PostDetail')
const WritePost = () => import('../components/common/writepost/WritePost')
const PostSearch = () => import('../views/home/PostSearch')
const TheyInfo = () => import('../views/theyinfo/TheyInfo')

// 1、安装插件
Vue.use(VueRouter)

// 2、创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home',
    meta: ['首页']
  },
  {
    path: '/home',
    component: Home,
    meta: ['首页']
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/userinfo',
    component: UserInfo
  },
  {
    path: '/theyinfo',
    component: TheyInfo
  },
  {
    path: '/writepost',
    component: WritePost
  },
  {
    path: '/postsearch',
    component: PostSearch
  },
  {
    path: '/postdetail',
    component: PostDetail
  },
  {
    path: '/editinfo',
    component: EditInfo
  },
  {
    path: '/specialArea',
    component: SpecialArea,
    meta: ['专区']
  },
  {
    path: '/generalize',
    component: Generalize,
    meta: ['推广']
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3、导出
export default router