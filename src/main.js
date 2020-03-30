import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'highlight.js/styles/pojoaque.css'
// vuetify
import vuetify from '@/plugins/vuetify'
import { checkJurisdiction } from '@/api/jurisdiction'

Vue.config.productionTip = false

Vue.use(vuetify)

// 优雅操作 - VUE自定义指令
Vue.directive('permission', {
  inserted (el, binding) {
    // inserted → 元素插入的时候
    let permission = binding.value // 获取到 v-permission的值
    if (permission) {
      let hasPermission = checkJurisdiction(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('无法判断。。。')
    }
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
