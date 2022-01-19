/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-13 13:24:18
 * @LastEditTime: 2022-01-19 17:57:27
 */
import axios from 'axios'
import { useMessage } from 'naive-ui'

let showMsg = true // 弹窗显示

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
    const status = error.response.status
    if (status === 500) {
      if (showMsg) {
        window.$message.error(`请求状态码:${status}`)
        showMsg = false
      } else {
        showMsg = true
      }
    }
    return Promise.reject(error)
  }
)

export default INSTANCE
