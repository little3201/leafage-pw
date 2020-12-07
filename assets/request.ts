// 服务匹配前缀
const SERVER_PRE = {
    assets: '/assets' // 资源
  }
  
  // 接口请求路径
  export const SERVER_URL = {
    posts: SERVER_PRE.assets.concat('/posts'), // 文章
    portfilio: SERVER_PRE.assets.concat('/portfilio') // 资源
  }