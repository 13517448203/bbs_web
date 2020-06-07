import axios from 'axios'


// 最终方法
export function request(config) {

  // 1.创建axios的实例
  const instance =axios.create({
    baseURL:'http://localhost:8888',
    // timeout:20000
  })

  // 2.axios拦截器
  instance.interceptors.request.use(config =>{
    // console.log(aaa);
    // 1、比如config中的一些信息不符合服务器的要求

    // 2、比如每次发送网络请求时都希望在界面中显示一个请求的图标

    // 3、某些网络请求（比如登录），必须携带一些特殊的信息
    return config
  },err=>{
    console.log(err);
  });
  // 2.2 响应拦截
  instance.interceptors.response.use(res =>{
    // console.log(res);
    return res
  },err =>{
    console.log(err);
  });

  // 3.发送真正的网络请求
   return instance(config)
}
