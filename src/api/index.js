/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-13 13:22:44
 * @LastEditTime: 2022-01-18 13:16:01
 */

import * as API from 'qtmusicapi'
import request from './request'
// import * as API from './music'
const api = {}
for (const key in Object.keys(API)) {
  if (Object.hasOwnProperty.call(Object.keys(API), key)) {
    const element = Object.keys(API)[key]
    if (element.match(/^\w+Api$/)) {
      api[element] = new API[element](null, '/api', request)
    }
  }
}
console.log('🚀 ~ file: index.js ~ line 21 ~ api', api)
export default api
// console.log(new api.RecPlaylistApi().recommendBannerGet())
// API.BASE_PATH = '/api'
// const a = new API.RecPlaylistApi()
// a.basePath = '/api'
// console.log('🚀 ~ file: index.js ~ line 13 ~ a', a)
// a.recommendBannerGet()
// export default new API.DefaultApi(null, '/api', request)
