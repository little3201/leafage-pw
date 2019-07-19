import axios from "@/api";

/* 登录方法 */
export const login = ({ username, password }) => {
  const params = {
    grant_type: "password",
    username: username,
    password: password,
    client_id: username,
    client_secret: password
  };
  return axios.request({
    url: "/oauth/token",
    method: "POST",
    params
  });
};

/* 根据用户id获取用户信息 */
export const getUserInfo = userId => {
  return axios.request({
    url: "/user/" + userId,
    method: "GET"
  });
};

/* 获取用户信息列表 */
export const findUsers = ({ pageNum, pageSize }) => {
  const params = {
    pageNum,
    pageSize
  };
  return axios.request({
    url: "/user",
    method: "GET",
    params
  });
};
