import axios from 'axios'
import Vue from 'vue'
import { LoadingBar } from 'view-design'
Vue.component('LoadingBar', LoadingBar)

// 创建axios实例
let service: any = {};
service = axios.create({
  baseURL: "/api", // api的base_url
  timeout: 50000 // 请求超时时间
});

// request拦截器 axios的一些配置
service.interceptors.request.use(
  (config: any) => {
    LoadingBar.start();
    let token = "123";
    if (token !== null) {
      config.headers.Authorization = "Bearer " + token; // 让每个请求携带自定义 token 请根据实际情况自行修改
    }
    return config;
  },
  (error: any) => {
    LoadingBar.finish();
    // Do something with request error
    console.error("error:", error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器 axios的一些配置
service.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    console.error("error:" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;