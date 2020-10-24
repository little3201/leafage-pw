const httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

export default function ({ $axios, redirect }) {
  $axios.onRequest((config) => {
    return config
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 404) {
      redirect('/404')
    } else {
      error.statusText = code in httpCode ? httpCode[error.status] : '网路可能有点堵，再试一下。'
      return error
    }
  })
}
