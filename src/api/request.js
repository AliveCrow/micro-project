/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-13 13:24:18
 * @LastEditTime: 2022-01-13 17:45:08
 */
import axios from 'axios'

const INSTANCE = axios.create({
  baseURL: '',
  withCredentials: true,
  timeout: 20000
})

INSTANCE.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

INSTANCE.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default INSTANCE
