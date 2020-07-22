import Vue from 'vue'
import App from './App.vue'
import router from './router'
// vuetify
import vuetify from '@/plugins/vuetify'
import './plugins'

Vue.config.productionTip = false

Vue.use(vuetify)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
