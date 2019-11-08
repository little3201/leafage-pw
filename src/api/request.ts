import service from './axios'

/* 登录方法 */
export const login = (username: string, password: string) => {
  const params = {
    grant_type: "password",
    username: username,
    password: password
  };
  return service.request({
    url: "/login",
    method: "POST",
    params
  });
}
