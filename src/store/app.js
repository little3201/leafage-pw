import { getMenuByRouter, getBreadCrumbList } from "@/utils/assist/util";
import routes from "@/router/routes";

export default {
  state: {
    breadCrumbList: [],
    homeRoute: {},
    errorList: []
  },
  getters: {
    // menuList: (state, getters, rootState) =>
    //   getMenuByRouter(routes, rootState.user.access),
    // errorCount: state => state.errorList.length
  },
  mutations: {
    /* 设置面包屑 */
    setBreadCrumb(state, route) {
      state.breadCrumbList = getBreadCrumbList(route, state.homeRoute);
    }
  }
};
