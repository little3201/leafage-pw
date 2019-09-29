import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* ant-design-vue */
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.less";
/* mavon-editor */
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.config.productionTip = false;
/* Antd */
Vue.use(Antd);
/* mavonEditor */
Vue.use(mavonEditor);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
