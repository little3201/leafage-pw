import axios from "axios";
import config from "@/config";
import { getToken } from "@/utils/assist/cookies.js";

class HttpRequest {
  // 如果传入参数就用传入的，没有就用baseURL.dev
  constructor(baseUrl = config.baseURL.dev) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  // 统一添加请求参数
  getInsideConfig() {
    const config = {
      // axios.create 参数 baseUrl将被添加到`url`前面，除非`url`是绝对的。
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + getToken()
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
