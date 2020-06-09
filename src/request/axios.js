import axios from 'axios'
import { Toast } from 'vant'
import router from '../router/index'

Toast.allowMultiple()
/**
 * 异常提示函数
 */
const tip = (message, type = 'fail') => {
  Toast({
    message,
    type
  })
}

/**
 * 统一异常处理
 * @param(Number) status 请求失败状态码
 **/
const errorHandle = (status, other) => {
  //状态码判断
  switch (status) {
  //401: 未登录状态
  case 401:
    router.replace({ path: '/login' })
    break;
    //403 token 过期
  case 403:
    tip('登录过期，请重新登录')
    localStorage.removeItem('token')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    break;
  case 404:
    tip('404,请求的资源不存在')
    break;
  case 500:
    tip('500,服务错误')
    break;
  default:
    console.warn(other)
    tip('连接失败')
  }
}


//创建实例
const $http = axios.create({ timeout: 1000 * 12 })

$http.defaults.headers.post['Content-Type'] = 'application/json'


/**
 * 请求拦截器
 * 配置token
 * **/
$http.interceptors.request.use()

/**
 * 响应拦截器
 **/
$http.interceptors.response.use(
  //成功
  res => res.status === 200 ? Promise.resolve(res.data) : Promise.reject(res),
  //失败
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
    } else {
      //未返回,超时或断网
      tip('请求超时')
    }
  }
)

export default $http
