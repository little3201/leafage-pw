import axios from '@/api'
import { SERVER_PRE, SERVER_URL, AUTH } from './request'

/* 登录方法 */
export const loginFunc = ({ username, password }) => {
  const params = {
    username: username,
    password: password,
    grant_type: 'password'
  }
  return axios.request({
    url: '/server/oauth/token',
    method: 'POST',
    auth: {
      username: AUTH.client_id,
      password: AUTH.client_secret
    },
    params
  })
}

/* 登录方法 */
export const logoutFunc = username => {
  return axios.request({
    url: '/logout',
    method: 'DELETE',
    username
  })
}

/* 获取手机验证码 */
export const querySmsCaptchaFunc = mobile => {
  return axios.request({
    url: SERVER_PRE.hypervisor + SERVER_URL.user,
    method: 'GET',
    mobile
  })
}

/* 根据用户id获取用户信息 */
export const queryUserFunc = userId => {
  return axios.request({
    url: SERVER_PRE.hypervisor + SERVER_URL.user + userId,
    method: 'GET'
  })
}

/* 获取用户信息列表 */
export const fetchUserFunc = ({ pageNum, pageSize }) => {
  const params = {
    pageNum,
    pageSize
  }
  return axios.request({
    url: SERVER_PRE.hypervisor + SERVER_URL.user,
    method: 'GET',
    params
  })
}

/* 根据文章ID获取文章详情 */
export const queryArticleFunc = articleId => {
  return axios.request({
    url: SERVER_PRE.assets + SERVER_URL.article + articleId,
    method: 'GET'
  })
}

/* 获取用户信息列表 */
export const fetchArticle = ({ pageNum, pageSize }) => {
  const params = {
    pageNum,
    pageSize
  }
  return axios.request({
    url: SERVER_PRE.assets + SERVER_URL.article,
    method: 'GET',
    params
  })
}
