<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-19 10:13:29
 * @LastEditTime: 2022-01-19 18:29:41
-->
<template>
  <div class="singer-detail">
    <NSpace vertical>
      <NSpace>
        <NAvatar
          round
          :size="200"
          :src="`https://y.qq.com/music/photo_new/T001R300x300M000${route.query.mid}.jpg`"
        ></NAvatar>
        <NSpace vertical style="width: 900px">
          <NH1>{{ route.query.name }}</NH1>
          <NEllipsis
            :line-clamp="3"
            :tooltip="{
              style: { maxWidth: '500px' },
              trigger: 'hover'
            }"
          >
            <span
              v-for="item in info.basic ? info.basic.item : []"
              :key="item.key"
              class="name"
            >{{ item.key }}：{{ item.value }}&nbsp;&nbsp;</span>
            <div>{{ info.desc }}</div>
            <template #tooltip>
              <div
                style="text-align: left;"
                v-for="item in info.basic ? info.basic.item : []"
                :key="item.key"
              >
                <span class="desc-key">{{ item.key }}</span>
                ：{{ item.value }}
              </div>
              <div>
                <span class="desc-key">简介</span>:
                <span>{{ info.desc }}</span>
              </div>
              <div v-if="info.other">
                <span class="desc-key">{{ info.other.item.key }}</span>
                :
                <span style="white-space: pre-wrap;">{{ info.other.item.value }}</span>
              </div>
            </template>
          </NEllipsis>
          <NSpace>
            <NSpace class="hot-song-num">
              <NH3>单曲</NH3>
              <NH1>{{ hotSongNum }}</NH1>
            </NSpace>
            <NSpace class="hot-song-num">
              <NH3>专辑</NH3>
              <NH1>{{ albumNum }}</NH1>
            </NSpace>
            <NSpace class="hot-song-num">
              <NH3>MV</NH3>
              <NH1>{{ mvNum }}</NH1>
            </NSpace>
          </NSpace>
        </NSpace>
      </NSpace>

      <!-- <SongList></SongList> -->
    </NSpace>
  </div>
</template>
<script setup>
import { NSpace, NAvatar, NEllipsis, NH3, NH1, NH2 } from 'naive-ui'
import { useRoute } from 'vue-router';
import api from '@/api'
import { ref } from 'vue'
import SongList from './components/SongList.vue'
import { useGetHotSong, useGetAlbum, useGetMV } from '@/views/Detail/Singer/hooks';

const route = useRoute()
const getSingerInfo = async () => {
  const res = await api.SingerApi.singerDescGet(route.query.mid)
  info.value = res.data
}
let info = ref({})
getSingerInfo()
const { total: hotSongNum } = await useGetHotSong(route.query.mid)
const { total: albumNum } = await useGetAlbum(route.query.mid)
const { total: mvNum } = await useGetMV(route.query.mid)
</script>
<style lang="scss">
.desc-key {
  font-weight: 700;
  color: $primary;
}
</style>
<style scoped lang='scss' >
.singer-detail {
  height: 100%;
  margin: 20px 0;
  .hot-song-num {
    cursor: pointer;
    &:hover {
      h1,
      h2,
      h3,
      h4 {
        color: $primary;
      }
    }
  }
  .name {
    font-size: 18px;
    font-weight: bold;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 2px;
    font-size: 14px;
    line-height: 50px;
  }
  .desc {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
}
</style>