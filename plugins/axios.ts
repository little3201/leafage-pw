let httpCode: any = {        //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

export default function ($axios: any, redirect: any) {
  $axios.onRequest((config: any) => {
    return config
  })

  $axios.onError((error: any) => {
    const code = parseInt(error.response && error.response.status)
    error.statusText = code in httpCode ? httpCode[error.status] : '网路可能有点堵，再试一下。'
    return error
  })
}