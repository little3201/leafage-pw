import Cookies from "vue-cookies";

const tokenKey = "access-token";
/* 设置token */
export const setToken = token => {
  let initEffectiveTime = new Date(new Date().getTime() + 120 * 60 * 1000);
  Cookies.set(tokenKey, token, initEffectiveTime);
};

/* 获取token */
export const getToken = () => {
  return Cookies.get(tokenKey);
};

/* 删除token */
export const removeToken = () => {
  Cookies.remove(tokenKey);
};
