/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-13 16:39:44
 * @LastEditTime: 2022-01-13 17:22:12
 */

import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => {
    return {
      theme: null,
      nightMode: null
    }
  }
})
