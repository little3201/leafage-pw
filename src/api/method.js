import axios from '@/api'
import { SERVER_URL } from './request'

/* ===================文章接口方法=================== */

/* 根据文章ID获取文章详情 */
export const fetchArticleFunc = businessId => {
  return axios.request({
    url: SERVER_URL.article.concat('/').concat(businessId)
  })
}

/* 获取文章列表 */
export const retrieveArticleFunc = () => {
  return axios.request({
    url: SERVER_URL.article
  })
}
