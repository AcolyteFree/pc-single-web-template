import axios from 'axios'
import qs from 'qs'

const ajx = axios.create({
  baseURL: SERVER_URL, // 设定请求环境(测试or生产)，由DefinePlugin 插件定义
  timeout: 36000,
  // 可自定义请求头
  headers: {
    'Content-Type': 'application/json'
  }
})
const get = ajx.get
const post = ajx.post
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// API接口定义在这里
const api = {
}

ajx.interceptors.request.use(function (config) {
  return config
})

ajx.interceptors.response.use(function (res) {
  let reqUrl = res.config.url
  let code = res.status

  if (code !== 200) {
    return Promise.reject(`业务错误:${code}`)
  }
  // 图片
  if (reqUrl.indexOf('writeImages') !== -1) {
    return res.data
  }
  // 处理excel文件
  if (res.headers && (res.headers['content-type'] === 'application/x-msdownload' || res.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || res.headers['content-type'] === 'application/octet-stream')) {
    downloadUrl(res)
    return res.data
  }

  return res.data
}, function (error) {
  if (error.response.status === 401) {
  //  接口401时候多是token失效可判定重新登录
  }

  // 这里 不reject 导致 promise变成 resolve 状态
  if (error) {
    return Promise.reject('数据请求错误')
  }
})

// download url
const downloadUrl = (res) => {
  let iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  iframe.src = res.request.responseURL
  iframe.onload = function () {
    document.body.removeChild(iframe)
  }
  document.body.appendChild(iframe)
}

/**
 * 将对象转,方便 x-www-from-urlencoded格式数据传输
 */
export function fromUrlcode (body) {
  return qs.stringify(body)
}

export { ajx, get, post, api, axios }
