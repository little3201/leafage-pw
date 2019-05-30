import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { LoadingBar } from "iview";

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
  next();
});

/* 路由之后添加token */
router.afterEach(() => {
  LoadingBar.finish();
});
export default router;
