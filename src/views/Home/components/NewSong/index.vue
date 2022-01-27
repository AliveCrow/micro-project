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
                class="album-avatar"
                :width="90"
                :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.album.mid}.jpg`"
                @click="toPage('AlbumDetail', item.album)"
              />
              <NSpace vertical>
                <NEllipsis class="link song-name" style="max-width: 180px;">
                  <span @click="getSongInfo(item.mid)">{{ item.title }}</span>
                </NEllipsis>
                <NEllipsis style="max-width: 180px;">
                  <span
                    class="link"
                    v-for="singer in item.singer"
                    :key="singer.id"
                    @click="toPage('SingerDetail', singer)"
                  >{{ singerList(singer, item.singer) }}</span>
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
import { NAnchor, NSpace, NAnchorLink, NTabs, NTabPane, NCard, NImage, NEllipsis } from "naive-ui";
import { useInit, useRequest } from "./hooks";
import { useSongStore } from "@/store/modules/songInfo";
import usePlayer from "@/utils/createPlayer";

const songStore = useSongStore()
const { list, AREA_CATEGORY, route, router, singerList, toPage } = useInit();
const { newSongsGet, songInfoGet, songUrlGet } = useRequest()
const res = await newSongsGet(0);
list.value = res.data.list.splice(0, 8)
const handleUpdateValue = async (val) => {
  const res = await newSongsGet(val);
  list.value = res.data.list.splice(0, 8)
};

const getSongInfo = async (mid) => {
  const res = await songInfoGet(mid)
  songStore.songInfo = res.data
  const urlRes = await songUrlGet(mid)
  // songStore.songUrl = urlRes.data
  usePlayer({
    src: urlRes.data,
    autoplay: true
  })
}
</script>
<style lang="scss">
.new-song {
  .n-tabs .n-tabs-tab-wrapper {
    padding: 0 20px;
  }
}
</style>
<style scoped lang="scss">
.new-song {
  text-align: left;

  .title {
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
  }

  .album-avatar {
    transition: all .25s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 6px rgba(0, 0, 0, .5);
    }
  }
}
</style>
