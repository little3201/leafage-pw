import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { LoadingBar } from "iview";
import { setToken, getToken, removeToken } from "./../utils/assist/util";

Vue.use(Router);
Vue.component("LoadingBar", LoadingBar);

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

/* 路由之前检查token */
router.beforeEach((to, from, next) => {
  LoadingBar.start();
  const token = getToken();
  if (token) {
    next({
      name: "sign"
    });
  } else {
    next();
  }
});

/* 路由之后添加token */
router.afterEach(route => {
  setToken("access_token", "123" + route.$cookies.text);
  removeToken("access_token");
  LoadingBar.finish();
});
export default router;
