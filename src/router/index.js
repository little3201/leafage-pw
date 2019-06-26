import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { getToken } from "@/utils/assist/cookies";

Vue.use(Router);

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

/* 路由之前检查token */
router.beforeEach((to, from, next) => {
  let token = getToken();
  if (to.fullPath == "/sign" || to.fullPath == "/" || to.fullPath == "/help") {
    next();
  } else if (token == null) {
    next({
      name: "sign"
    });
  } else {
    next();
  }
});

/* 路由之后添加token */
router.afterEach(() => {});
export default router;
