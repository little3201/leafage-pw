import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { Button, LoadingBar, Message, Input, Table } from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.component('Button', Button)
Vue.component('LoadingBar', LoadingBar)
Vue.component('Message', Message)
Vue.component('Input', Input)
Vue.component('Table', Table)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
