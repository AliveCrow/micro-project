<!--
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-14 10:40:20
 * @LastEditTime: 2022-01-19 10:31:46
-->
<template >
  <div class="homepage">
    <NSpace justify="center" style="gap: 10px;">
      <Banner></Banner>
      <NewSong></NewSong>
    </NSpace>
  </div>
</template>
<script setup>
import { NSpace, NScrollbar } from 'naive-ui'
import Banner from './components/Banner'
import NewSong from './components/NewSong'
import { useMessage } from 'naive-ui'

window.$message = useMessage()
</script>
<style scoped lang='scss' >
.homepage {
  min-height: 100vh;
  overflow: hidden;
}
</style>
