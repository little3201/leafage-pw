import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// view-design
import Antd from '@/components/antd'
import '@/components/antd/index.less'

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
