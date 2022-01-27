/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-18 13:52:04
 * @LastEditTime: 2022-01-19 10:55:35
 */
import { computed, ref } from "vue"
import { useRoute ,useRouter} from 'vue-router'
import api from "@/api";


export const useInit = () => {
  const list = ref([])
  const AREA_CATEGORY = ['最新', '内地', '港台', '欧美', '韩国', '日本']
  const router = useRouter()
  const route = useRoute()
  const singerList = computed(() => (item, arr) => {
    const length = arr.length - 1
    const index = arr.findIndex(r => r.id === item.id)
    if (index === length) {
      return item.name
    } else {
      return item.name + '/'
    }
  })
  // const newSongsGet = async (index) => {
  //   const res = await api.RecNewApi.newSongsGet(index)
  //   list.value = res.data.list.splice(0, 8)
  // }
  const toPage = (name, item) => {
    router.push({
      name, params: { mid: item.mid, name: item.name }, query: { mid: item.mid, name: item.name }
    });
  };
  return {
    list,
    AREA_CATEGORY,
    route,
    router,
    singerList,
    toPage,
  }
}

export const useRequest = () => {
  const newSongsGet = async (index) => {
    return await api.RecNewApi.newSongsGet(index)
  }
  const songInfoGet = async (mid) => {
    return await api.SongInfoApi.songGet(mid)
  }
  const songUrlGet = async (id) => {
    return await api.PlayApi.songUrlsGet(id)
  }

  return {
    newSongsGet,
    songInfoGet,
    songUrlGet
  }
}



