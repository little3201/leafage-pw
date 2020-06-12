import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(VueRouter)

// 白名单
const whiteList = [
  '/',
  '/blog',
  '/portfolio',
  '/about',
  '/contact',
  '/signin',
  '/signup'
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  },
  routes
})

/* 路由之前检查token */
router.beforeEach((to, from, next) => {
  NProgress.start()
  let token
  // 白名单直接放行
  if (whiteList.includes(to.fullPath)) {
    next()
  } else if (to.fullPath.startsWith('/detail')) {
    // 路由包含/details，即详情页，放行
    next()
  } else if (!token && to.fullPath !== 'signin') {
    // 路由不是登录，且没有拿到token，直接拦截，跳转至登录页
    next({
      name: 'signin'
    })
  } else {
    // 拿到token，或者路由是login，直接放行
    next()
  }
})

/* 路由之后关闭进度条 */
router.afterEach(() => {
  NProgress.done()
})

export default router
