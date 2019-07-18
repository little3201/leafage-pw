import Cookies from "vue-cookies";

const tokenKey = "access_token";
/* 设置token */
export const setToken = token => {
  //设置有效时间为30分钟
  let initEffectiveTime = new Date(new Date().getTime() + 60 * 30);
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
