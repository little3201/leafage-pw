import axios from '~/plugins/axios'
import { SERVER_URL } from './request'

/* ===================文章接口方法=================== */

/* 根据文章ID获取文章详情 */
export const fetchArticleFunc = (businessId: string) => {
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

/* ===================翻译接口方法=================== */

/* 根据翻译ID获取翻译详情 */
export const fetchTranslationFunc = (businessId: string) => {
  return axios.request({
    url: SERVER_URL.translation.concat('/').concat(businessId)
  })
}

/* 获取翻译信息列表 */
export const retrieveTranslationFunc = () => {
  return axios.request({
    url: SERVER_URL.translation
  })
}

/* ===================话题接口方法=================== */

/* 根据翻译ID获取翻译详情 */
export const fetchTopicFunc = (businessId: string) => {
  return axios.request({
    url: SERVER_URL.topic.concat('/').concat(businessId)
  })
}

/* 获取翻译信息列表 */
export const retrieveTopicFunc = () => {
  return axios.request({
    url: SERVER_URL.topic
  })
}
