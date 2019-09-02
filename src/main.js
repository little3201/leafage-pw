import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* ant-design-vue */
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
/* highlight.js */
import Highlight from "@/utils/assist/highlight.js";

Vue.config.productionTip = false;
/* Antd */
Vue.use(Antd);
/* Highlight */
Vue.use(Highlight);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
