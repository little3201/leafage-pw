import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29ff1f68 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _682a35d2 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _ad9c8c8a = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _14c21223 = () => interopDefault(import('..\\pages\\portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _49b6fa2d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _29ff1f68,
    name: "about"
  }, {
    path: "/blog",
    component: _682a35d2,
    name: "blog"
  }, {
    path: "/contact",
    component: _ad9c8c8a,
    name: "contact"
  }, {
    path: "/portfolio",
    component: _14c21223,
    name: "portfolio"
  }, {
    path: "/",
    component: _49b6fa2d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
