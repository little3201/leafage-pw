import Cookies from "vue-cookies";

/* 设置token */
export const setToken = (tokenKey, token) => {
  Cookies.set(tokenKey, token);
};

/* 获取token */
export const getToken = () => {
  const token = Cookies.get("access_token");
  if (token) {
    return token;
  } else {
    return false;
  }
};

/* 删除token */
export const removeToken = tokenKey => {
  Cookies.remove(tokenKey);
};
