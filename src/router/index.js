import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/assist/cookies";

import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

Vue.use(Router);
NProgress.configure({ showSpinner: false }); // NProgress Configuration

//白名单
const whiteList = ["/", "/home", "/share", "/photograph", "/register"];

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

/* 路由之前检查token */
router.beforeEach((to, from, next) => {
  NProgress.start();
  let token = getToken();
  //白名单直接放行
  if (whiteList.includes(to.fullPath)) {
    next();
  } else if (to.fullPath.startsWith("/article") || to.fullPath.startsWith("/photograph") ) {
    //路由包含/article，即文章详情页，或者包换/photograph，即图片记录，放行
    next();
  } else if (token == null && to.fullPath !== "/login") {
    //路由不是登录，且没有拿到token，直接拦截，跳转至登录页
    next({
      name: "login"
    });
  } else {
    //拿到token，或者路由是login，直接放行
    next();
  }
});

/* 路由之后关闭进度条 */
router.afterEach(() => {
  NProgress.done();
});
export default router;
