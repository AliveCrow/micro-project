<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-14 10:37:05
 * @LastEditTime: 2022-01-17 13:11:19
-->

<template>
  <div class="img-box">
    <NSkeleton v-if="loading" :sharp="false" width="calc(100vw - 270px)" :height="150" animation></NSkeleton>
    <div v-show="false" style="min-height: 150px">123</div>
    <NSpace :wrap="false">
      <!-- // todo 专辑链接不对 -->
      <a :href="item.h5Url" target="__blank" v-for="item in  bannerList.data" :key="item.id">
        <img class="carousel-img" :src="item.picUrl" />
      </a>
    </NSpace>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { NCarousel, NSpace, NSkeleton } from 'naive-ui'
import api from '@/api'

const bannerList = reactive({ data: [] })
const loading = ref(true)
api.RecPlaylistApi.recommendBannerGet().then(res => {
  bannerList.data = res.data
  loading.value = false
})
</script>
<style scoped lang='scss' >
.img-box {
  .carousel-img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
