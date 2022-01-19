<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-14 10:37:05
 * @LastEditTime: 2022-01-19 10:10:58
-->

<template>
  <div class="img-box">
    <NSkeleton v-if="loading" :sharp="false" width="calc(100vw - 270px)" :height="150" animation></NSkeleton>
    <div v-show="false" style="min-height: 150px">123</div>
    <NCarousel show-arrow autoplay>
      <!-- // todo 专辑链接不对 -->
      <a :href="item.h5Url" target="__blank" v-for="item in  bannerList.data" :key="item.id">
        <img class="carousel-img" :src="item.picUrl" />
      </a>
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="curtom-arrow--left" @click="prev">
            <NIcon>
              <ArrowBack />
            </NIcon>
          </button>
          <button type="button" class="curtom-arrow--right" @click="next">
            <NIcon>
              <ArrowForward />
            </NIcon>
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li
            v-for="index of total"
            :class="{ ['is-active']: currentIndex === index - 1 }"
            :key="index"
            @click="to(index - 1)"
          ></li>
        </ul>
      </template>
    </NCarousel>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { NCarousel, NSpace, NSkeleton, NIcon } from 'naive-ui'
import api from '@/api'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'


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
    // object-fit: cover;
  }
}
</style>
<style>
.carousel-img {
  width: 100%;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>