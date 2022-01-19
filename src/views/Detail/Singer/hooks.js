/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-19 17:45:53
 * @LastEditTime: 2022-01-19 18:27:59
 */
import { ref } from 'vue'
import api from '@/api'

/* 歌手热门歌曲 */
export const useGetHotSong = async (singerMid) => {
  const res = await api.SingerApi.singerSongsGet(singerMid)
  if (res.result === 100) {
    return res.data
  }
  return null
}

/* 歌手专辑 */
export const useGetAlbum = async (singerMid) => {
  const res = await api.SingerApi.singerAlbumGet(singerMid)
  if (res.singerAlbum) {
    return res.singerAlbum.data
  } else {
    return res.data
  }
}

/* 歌手MV */
export const useGetMV = async (singerMid) => {
  const res = await api.SingerApi.singerMvGet(singerMid)
  if (res.result === 100) {
    return res.data
  }
  return null
}