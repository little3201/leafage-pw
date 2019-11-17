import service from './axios'

/* 登录 */
export const login = (username, password) => {
  const params = {
    grant_type: 'password',
    username: username,
    password: password
  }
  return service.request({
    url: '/login',
    method: 'POST',
    params
  })
}

/* 登出 */
export const logout = () => {
  return service.request({
    url: '/logout',
    method: 'DELETE'
  })
}
