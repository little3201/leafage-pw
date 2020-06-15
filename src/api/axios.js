import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false }) // NProgress Configuration
// import jwt_decode from 'jwt-decode'

class HttpRequest {
  // 如果传入参数就用传入的，没有就用baseURL.dev
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.queue = {}
  }

  // 统一添加请求参数
  getInsideConfig () {
    const config = {
      // axios.create 参数 baseUrl将被添加到`url`前面，除非`url`是绝对的。
      baseURL: this.baseUrl
    }
    return config
  }

  destroy (url) {
    delete this.queue[url]
  }

  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        NProgress.start()
        this.queue[url] = true
        return config
      },
      error => {
        NProgress.done()
        return Promise.reject(error)
      }
    )

    // 响应拦截
    instance.interceptors.response.use(
      res => {
        NProgress.done()
        this.destroy(url)
        const { data, status } = res
        return { data, status }
      },
      error => {
        NProgress.done()
        if (error) {
          // 状态码判断
          switch (error.status) {
            // 401: 未登录状态，跳转登录页
            case 400:
              error.statusText = '服务可能罢工了，再试一下。'
              break
            // 404请求不存在
            case 404:
              error.statusText = '服务可能罢工了，再试一下。'
              break
            default:
              error.statusText = '请求可能跑丢了，再试一下。'
          }
          return Promise.reject(error)
        } else {
          // 处理断网的情况
          error.statusText = '网路可能有点堵，再试一下。'
        }
        return Promise.reject(error)
      }
    )
  }

  request (options) {
    const instance = axios.create()
    // 覆写库的超时默认值，所有请求都会等待 1 秒
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
