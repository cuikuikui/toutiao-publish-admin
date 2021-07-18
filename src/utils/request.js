import axios from "axios";

// 封装的最终方案
export function request(config) {
    // 1、创建axios实例
    const instance = axios.create({
      baseURL: "http://152.136.185.210:7878/api/m5/",
      timeout: 5000
    });

    // 2、axios的拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
      // 1 比如config中的一些信息不符合服务器要求就在此处修正

      // 2 比如每次发送网络请求时，都希望在界面上显示一个正在加载中(一直在旋转)的图标。可以在此处设置

      // 3 某些网络请求(比如登录(token)),必须携带一些特殊信息
      return config
    }, err => {
      console.log(err)
    })
    // 2.2响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, error => {
      console.log(error)
    })
    // 3、发送真正的网络请求
    // 调用instance(config)的返回值是一个Promise
    return instance(config)
}