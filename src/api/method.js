import axios from '@/api'
import { SERVER_URL, AUTH } from './request'

/* 登录方法 */
export const loginFunc = ({ username, password }) => {
  let params = {
    username: username,
    password: password,
    grant_type: 'password'
  }
  return axios.request({
    url: SERVER_URL.signin,
    method: 'POST',
    auth: {
      username: AUTH.client_id,
      password: AUTH.client_secret
    },
    params
  })
}

/* 登出方法 */
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
    url: SERVER_URL.user,
    method: 'GET',
    mobile
  })
}

/* ===================用户接口方法=================== */

/* 根据userId获取用户信息 */
export const queryUserFunc = userId => {
  return axios.request({
    url: SERVER_URL.user + userId,
    method: 'GET'
  })
}

/* 获取用户信息列表 */
export const fetchUserFunc = ({ pageNum, pageSize }) => {
  let params = {
    pageNum,
    pageSize
  }
  return axios.request({
    url: SERVER_URL.user,
    method: 'GET',
    params
  })
}

/* ===================文章接口方法=================== */

/* 根据文章ID获取文章详情 */
export const queryArticleFunc = articleId => {
  return axios.request({
    url: SERVER_URL.article + articleId,
    method: 'GET'
  })
}

/* 获取用户信息列表 */
export const fetchArticleFunc = ({ pageNum, pageSize }) => {
  let params = {
    pageNum,
    pageSize
  }
  return axios.request({
    url: SERVER_URL.article,
    method: 'GET',
    params
  })
}

/* ===================翻译接口方法=================== */

/* 根据翻译ID获取翻译详情 */
export const queryTranslationFunc = translationId => {
  return axios.request({
    url: SERVER_URL.translation + translationId,
    method: 'GET'
  })
}

/* 获取翻译信息列表 */
export const fetchTranslationFunc = ({ pageNum, pageSize }) => {
  let params = {
    pageNum,
    pageSize
  }
  return axios.request({
    url: SERVER_URL.translation,
    method: 'GET',
    params
  })
}

/* ===================话题接口方法=================== */

/* 根据翻译ID获取翻译详情 */
export const queryTopicFunc = topicId => {
  return axios.request({
    url: SERVER_URL.topic + topicId,
    method: 'GET'
  })
}

/* 获取翻译信息列表 */
export const fetchTopicFunc = ({ pageNum, pageSize }) => {
  let params = {
    pageNum,
    pageSize
  }
  return axios.request({
    url: SERVER_URL.topic,
    method: 'GET',
    params
  })
}
