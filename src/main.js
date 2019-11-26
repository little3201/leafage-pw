import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// view-design
import Element from '@/components/elementui'

Vue.config.productionTip = false

Vue.use(Element)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
