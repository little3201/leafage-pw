import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/assist/cookies";

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

Vue.use(Router);
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = [
  "/",
  "/home",
  "/share",
  "/photograph",
  "/register",
  "/article/null"
];

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

/* 路由之前检查token */
router.beforeEach((to, from, next) => {
  NProgress.start();
  let token = getToken();
  if (whiteList.includes(to.fullPath)) {
    next();
  } else if (token == null && to.fullPath !== "/login") {
    next({
      name: "login"
    });
  } else {
    next();
  }
});

/* 路由之后添加token */
router.afterEach(() => {
  NProgress.done();
});
export default router;
