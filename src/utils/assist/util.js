import config from "@/config";

export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return;
  let i = -1;
  let len = arr.length;
  while (++i < len) {
    let item = arr[i];
    fn(item, i, arr);
  }
};

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (target, arr) => {
  return target.some(_ => arr.indexOf(_) > -1);
};

export const hasChild = item => {
  return item.children && item.children.length !== 0;
};

const showThisMenuEle = (item, access) => {
  if (item.meta && item.meta.access && item.meta.access.length) {
    if (hasOneOf(item.meta.access, access)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

/**
 * @param {Array} list 通过路由列表得到菜单列表
 * @returns {Array}
 */
export const getMenuByRouter = (list, access) => {
  let res = [];
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      let obj = {
        icon: (item.meta && item.meta.icon) || "",
        name: item.name,
        meta: item.meta
      };
      if (
        (hasChild(item) || (item.meta && item.meta.showAlways)) &&
        showThisMenuEle(item, access)
      ) {
        obj.children = getMenuByRouter(item.children, access);
      }
      if (item.meta && item.meta.href) obj.href = item.meta.href;
      if (showThisMenuEle(item, access)) res.push(obj);
    }
  });
  return res;
};

/**
 * @param {Array} routeMetched 当前路由metched
 * @returns {Array}
 */
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = { ...homeRoute, icon: homeRoute.meta.icon };
  let routeMetched = route.matched;
  if (routeMetched.some(item => item.name === homeRoute.name))
    return [homeItem];
  let res = routeMetched
    .filter(item => {
      return item.meta === undefined || !item.meta.hideInBread;
    })
    .map(item => {
      let meta = { ...item.meta };
      if (meta.title && typeof meta.title === "function") {
        meta.isFunction = true;
        meta.title = meta.title(route);
      }
      let obj = {
        icon: (item.meta && item.meta.icon) || "",
        name: item.name,
        meta: meta
      };
      return obj;
    });
  res = res.filter(item => {
    return !item.meta.hideInMenu;
  });
  return [{ ...homeItem, to: homeRoute.path }, ...res];
};

export const getRouteTitleHandled = route => {
  let router = { ...route };
  let meta = { ...route.meta };
  let title = "";
  if (meta.title) {
    if (typeof meta.title === "function") {
      meta.isFunction = true;
      title = meta.title(router);
    } else {
      title = meta.title;
    }
  }
  meta.title = title;
  router.meta = meta;
  return router;
};

export const showTitle = (item, vm) => {
  let { title, isFunction } = item.meta;
  if (!title) return;
  if (config.useI18n) {
    if (title.includes("{{") && title.includes("}}") && config.useI18n) {
      title = title.replace(/({{[\s\S]+?}})/, (m, str) =>
        str.replace(/{{([\s\S]*)}}/, (m, _) => vm.$t(_.trim()))
      );
    } else if (isFunction) {
      title = item.meta.title;
    } else {
      title = vm.$t(item.name);
    }
  } else {
    title = (item.meta && item.meta.title) || item.name;
  }
  return title;
};

/**
 * @description 根据当前跳转的路由设置显示在浏览器标签的title
 * @param {Object} routeItem 路由对象
 * @param {Object} vm Vue实例
 */
export const setTitle = (routeItem, vm) => {
  const handledRoute = getRouteTitleHandled(routeItem);
  const pageTitle = showTitle(handledRoute, vm);
  const resTitle = pageTitle ? `${config.title} - ${pageTitle}` : config.title;
  window.document.title = resTitle;
};

/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = (routers, homeName = "main") => {
  let i = -1;
  let len = routers.length;
  let homeRoute = {};
  while (++i < len) {
    let item = routers[i];
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children, homeName);
      if (res.name) {
        return res;
      }
    } else {
      if (item.name === homeName) {
        homeRoute = item;
      }
    }
  }
  return homeRoute;
};

/**
 * @param {Array} list 标签列表
 * @param {String} name 当前关闭的标签的name
 */
export const getNextRoute = (list, route) => {
  let res = {};
  if (list.length === 2) {
    res = getHomeRoute(list);
  } else {
    const index = list.findIndex(item => routeEqual(item, route));
    if (index === list.length - 1) res = list[list.length - 2];
    else res = list[index + 1];
  }
  return res;
};

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {};
  const params2 = route2.params || {};
  const query1 = route1.query || {};
  const query2 = route2.query || {};
  return (
    route1.name === route2.name &&
    objEqual(params1, params2) &&
    objEqual(query1, query2)
  );
};

/**
 * 判断打开的标签列表里是否已存在这个新添加的路由对象
 */
export const routeHasExist = (tagNavList, routeItem) => {
  let len = tagNavList.length;
  let res = false;
  doCustomTimes(len, index => {
    if (routeEqual(tagNavList[index], routeItem)) res = true;
  });
  return res;
};

/**
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1);
  const keysArr2 = Object.keys(obj2);
  if (keysArr1.length !== keysArr2.length) return false;
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true;
  else {
    return !keysArr1.some(key => obj1[key] != obj2[key]);
  }
};

/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export const doCustomTimes = (times, callback) => {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
};
