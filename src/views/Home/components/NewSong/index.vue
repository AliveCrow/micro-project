<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-14 10:43:56
 * @LastEditTime: 2022-01-19 11:21:26
-->
<template>
  <NSpace class="new-song" vertical>
    <div class="title">新歌推荐</div>
    <NTabs
      default-value="最新"
      @update:value="handleUpdateValue"
      size="small"
      justify-content="center"
    >
      <n-tab-pane v-for="v in AREA_CATEGORY" :key="v" :name="v" :tab="v">
        <NSpace style="margin-top: 20px">
          <div v-for="item in list" :key="item.id" style="width: 285px">
            <NSpace>
              <img
                :width="90"
                :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album.mid}.jpg`"
              />
              <NSpace vertical>
                <NEllipsis class="link song-name" style="max-width: 180px;">
                  <span @click="toPage('AlbumDetail', item.album)">{{ item.title }}</span>
                </NEllipsis>
                <NEllipsis style="max-width: 180px;">
                  <span
                    class="link"
                    v-for="singer in item.singer"
                    :key="singer.id"
                    @click="toPage('SingerDetail', singer)"
                  >{{ useSingerList(singer, item.singer) }}</span>
                </NEllipsis>
              </NSpace>
            </NSpace>
          </div>
        </NSpace>
      </n-tab-pane>
    </NTabs>
  </NSpace>
</template>
<script setup>
import { NAnchor, NSpace, NAnchorLink, NTabs, NTabPane, NCard, NImage, NEllipsis } from 'naive-ui'
import api from '@/api'
import { ref } from 'vue'
import { useSingerList } from './hooks'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const list = ref([])
const AREA_CATEGORY = ['最新', '内地', '港台', '欧美', '韩国', '日本']
const songsGet = async (index) => {
  const res = await api.RecNewApi.newSongsGet(index)
  list.value = res.data.list.splice(0, 8)
}
songsGet(0)
const handleUpdateValue = (val) => {
  songsGet(AREA_CATEGORY.findIndex(r => r === val))
}
const toPage = (name, item) => {
  console.log('item: ', item);
  router.push({
    name, params: { mid: item.mid, name: item.name }, query: { mid: item.mid, name: item.name }
  })
}
</script>
<style  lang="scss">
.n-tabs .n-tabs-tab-wrapper {
  padding: 0 20px;
}
.new-song {
  .n-card {
  }
  text-align: left;
  .title {
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
  }
}
</style>