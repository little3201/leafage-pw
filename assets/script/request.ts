// 服务匹配前缀
const SERVER_PRE = {
  assets: '/assets' // 资源
}

// 接口请求路径
export const SERVER_URL = {
  article: SERVER_PRE.assets.concat('/article'), // 文章
  translation: SERVER_PRE.assets.concat('/translation'), // 翻译
  source: SERVER_PRE.assets.concat('/resource') // 资源
}
