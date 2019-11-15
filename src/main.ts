import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// view-design
import ViewUI from './viewui'
import 'view-design/dist/styles/iview.css'

//import './viewui/index.less'
// mavon-editor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

Vue.use(ViewUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
