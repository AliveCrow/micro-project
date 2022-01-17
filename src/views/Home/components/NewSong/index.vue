<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-14 10:43:56
 * @LastEditTime: 2022-01-17 13:25:47
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
      <n-tab-pane v-for="v in AREA_CATEGORY" :key="v" :name="v" :tab="v">{{ v }}</n-tab-pane>
    </NTabs>
  </NSpace>
</template>
<script setup>
import { NAnchor, NSpace, NAnchorLink, NTabs, NTabPane } from 'naive-ui'
import api from '@/api'
import { ref } from 'vue'

// api.recommendPlaylistGet(0)
//  0: 最新 1：内地，2：港台，3：欧美，4：韩国，5：日本
const AREA_CATEGORY = ['最新', '内地', '港台', '欧美', '韩国', '日本']
const handleUpdateValue = (val) => {
  //   api.recommendPlaylistGet(AREA_CATEGORY.findIndex(r => r === val))
}

</script>
<style lang="scss">
.n-tabs .n-tabs-tab-wrapper {
  padding: 0 20px;
}
</style>
<style scoped lang='scss' >
.new-song {
  text-align: left;
  // width: calc(100vw - 270px);
  .title {
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
  }
}
</style>
