import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3af3be54 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _989e8eaa = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _4f7a4da7 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _83b6d130 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _4b355b0f = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _5aab9919 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3af3be54,
    name: "about"
  }, {
    path: "/blog",
    component: _989e8eaa,
    name: "blog"
  }, {
    path: "/contact",
    component: _4f7a4da7,
    name: "contact"
  }, {
    path: "/home",
    component: _83b6d130,
    name: "home"
  }, {
    path: "/portfolio",
    component: _4b355b0f,
    name: "portfolio"
  }, {
    path: "/",
    component: _5aab9919,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
