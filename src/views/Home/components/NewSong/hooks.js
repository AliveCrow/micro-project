/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-18 13:52:04
 * @LastEditTime: 2022-01-19 10:55:35
 */
import { computed } from "vue"


export const useSingerList = (item, arr) => {
  const length = arr.length - 1
  const index = arr.findIndex(r => r.id === item.id)
  if (index === length) {
    return item.name
  } else {
    return item.name + '/'
  }
}

