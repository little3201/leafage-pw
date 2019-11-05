import axios from "@/api";

/* 登录方法 */
export const login = ({ username, password }) => {
  const params = {
    grant_type: "password",
    username: username,
    password: password
  };
  return axios.request({
    url: "/server/oauth/token",
    method: "POST",
    headers: {
      "Authorization": `Basic ${window.btoa("abeille:abeille")}`,
    },
    params
  });
};

/* 获取手机验证码 */
export const querySmsCaptcha = mobile => {
  return axios.request({
    url: "/hypervisor/user",
    method: "GET",
    mobile
  });
};

/* 根据用户id获取用户信息 */
export const queryUser = userId => {
  return axios.request({
    url: "/hypervisor/user/" + userId,
    method: "GET"
  });
};

/* 获取用户信息列表 */
export const fetchUser = ({ pageNum, pageSize }) => {
  const params = {
    pageNum,
    pageSize
  };
  return axios.request({
    url: "/hypervisor/user",
    method: "GET",
    params
  });
};

/* 根据文章ID获取文章详情 */
export const queryArticle = articleId => {
  return axios.request({
    url: "/assets/article/" + articleId,
    method: "GET"
  });
};

/* 获取用户信息列表 */
export const fetchArticle = ({ pageNum, pageSize }) => {
  const params = {
    pageNum,
    pageSize
  };
  return axios.request({
    url: "/assets/article",
    method: "GET",
    params
  });
};
