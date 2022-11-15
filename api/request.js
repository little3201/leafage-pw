// 服务匹配前缀
const SERVER_PRE = {
  assets: '/assets' // 资源
}

// 接口请求路径
export const SERVER_URL = {
  posts: SERVER_PRE.assets.concat('/posts'), // 文章
  resource: SERVER_PRE.assets.concat('/resources'), // 资源
  category: SERVER_PRE.assets.concat('/categories'), // 资源
  comment: SERVER_PRE.assets.concat('/comments'), // 留言评论
}