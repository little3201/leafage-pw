import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue-cookies'
// vuetify
import vuetify from '@/plugins/vuetify'
import './plugins'

Vue.config.productionTip = false

Vue.use(vuetify)
Vue.use(VueCookies)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
