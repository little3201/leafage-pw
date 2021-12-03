const statusCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

export const accessor = ({ error, app: { $axios }, redirect }) => {

  $axios.onRequest((config) => {
    return config
  })

  $axios.onError((err) => {
    const status = err.response?.status
    if (status === 404) {
      redirect('/error')
    } else {
      error({ message: statusCode[status] })
      return Promise.reject(err)
    }
  })
}