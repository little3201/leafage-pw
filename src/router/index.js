import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { LoadingBar } from "iview";

Vue.use(Router);

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});

/* router.beforeEach((to, from, next) => {
  LoadingBar.start();
  if (to.name == undefined) {
    next({
      name: "sign"
    });
  }
});

router.afterEach(to => {
  LoadingBar.finish();
  window.scrollTo(0, 0);
}); */

export default router;
