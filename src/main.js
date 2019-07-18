import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";

Vue.config.productionTip = false;
/* Antd */
Vue.use(Antd);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
