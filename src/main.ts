import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Drawer, Form, FormItem, Header, Icon, Input, Layout, Menu, MenuItem, Message } from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.component('Button', Button)
Vue.component('Drawer', Drawer)
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Header', Header)
Vue.component('Icon', Icon)
Vue.component('Input', Input)
Vue.component('Layout', Layout)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Message', Message)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
