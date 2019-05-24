import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import config from "@/config";
import { LoadingBar } from "iview";

const { homeName } = config;

Vue.use(Router);

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

router.beforeEach((to, from, next) => {
  LoadingBar.start();
	next({
	  name: "main" // 跳转到登录页
	})
});

router.afterEach(to => {
  LoadingBar.finish();
  window.scrollTo(0, 0);
});

export default router;
