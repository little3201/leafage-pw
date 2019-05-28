import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
import { LoadingBar } from "iview";

Vue.use(Router);
Vue.component('LoadingBar', LoadingBar);

const router = new Router({
  routes,
  mode: "history",
  base: process.env.BASE_URL
});
router.beforeEach((to, from, next) => {
	LoadingBar.start();
	next();
});

router.afterEach(route => {
  LoadingBar.finish();
});
export default router;
