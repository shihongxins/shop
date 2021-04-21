import axios from 'axios'

// 实例与默认配置
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/628cf70894aca5a8f604f5219f08b343/shop'
})

// 拦截器
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

const get = (url, config) => {
  return instance.get(url, config)
}

const post = (url, data, config = {}) => {
  config = Object.assign(config, instance.defaults)
  if (window.URLSearchParams) {
    const params = new URLSearchParams()
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        params.append(key, data[key])
      }
    }
    data = params
  } else {
    // 转换器
    config.transformRequest = function (data) {
      let str = ''
      for (const key in data) {
        str += `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}&`
      }
      return str
    }
    config.headers = { 'content-type': 'application/x-www-form-urlencoded' }
  }
  return instance.post(url, data, config)
}

export { instance as default, get, post }
