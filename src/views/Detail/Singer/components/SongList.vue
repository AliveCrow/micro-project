<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-19 17:38:45
 * @LastEditTime: 2022-01-19 18:11:03
-->
<template>
  <NList class="song-list">
    <template #header>
      <NH2>热门歌曲</NH2>
    </template>
    <NListItem v-for="(item,index) in songList" :key="item.id">
      <template #prefix>{{ index }}</template>
    </NListItem>
    <template #footer>fff</template>
  </NList>
</template>
<script setup>
import { NList, NListItem, NH2 } from 'naive-ui';

</script>
<style scoped lang='scss' >
.song-list {
}
</style>