import axios from "axios";
import { baseURL } from "@/config";

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

class HttpRequest {
  // 如果传入参数就用传入的，没有就用baseURL
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
    return config;
  }
  destroy(url) {
    delete this.queue[url];
  }
  interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        this.queue[url] = true;
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      res => {
        this.destroy(url);
        const { data, status } = res;
        return { data, status };
      },
      error => {
        this.destroy(url);
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
