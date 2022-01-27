<template>
  <div class="player" v-drag v-if="songStore.songInfo">
    <div style="text-align: center; padding: 0 20px">
      <div>{{songStore.songInfo.track_info.title}}</div>
      <NEllipsis>{{singerList(songStore.songInfo.track_info.singer)}}</NEllipsis>
    </div>
    <img
      :src="`https://y.gtimg.cn/music/photo_new/T002R300x300M000${songStore.songInfo.track_info.album.mid}.jpg`"
    />
     <div class="player-bottom">
      <div class="player-btn-group">
        <div class="prv">
          <NIcon size="20">
            <PlaySkipBackOutline></PlaySkipBackOutline>
          </NIcon>
        </div>
        <div class="play" >
          <NIcon  size="25">
            <PauseCircleOutline v-if="isPause"></PauseCircleOutline>
            <PlayCircleOutline v-else></PlayCircleOutline>
          </NIcon>
        </div>
        <div class="next">
          <NIcon  size="20">
            <PlaySkipForwardOutline></PlaySkipForwardOutline>
          </NIcon>
        </div>
      </div>
      <div class="progress">progress</div>
    </div>
  </div>
</template>

<script setup>
import { useSongStore } from "@/store/modules/songInfo";
import { computed, ref } from 'vue'
import { NEllipsis, NSider, NIcon } from 'naive-ui'
import { PlaySkipBackOutline,PlaySkipForwardOutline,PauseCircleOutline, PlayCircleOutline } from '@vicons/ionicons5'

const isPause = ref(true)
const songStore = useSongStore()
const singerList = computed(() => (arr) => {
  return arr.map(r => r.name).join('/')
})

</script>

<style scoped lang="scss">
.player {
  position: absolute;
  z-index: 99999;
  background: $primary;
  border-radius: 10px;
  height: 245px;
  width: 245px;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    pointer-events: none;
  }
  .player-bottom {
    position: absolute;
    z-index: 999;
    width: 100%;
    bottom: 0;
    background-color: rgba(#4C473F, .8);
    color: #fff;
    .player-btn-group {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .progress {
      text-align: center;
    }
  }

}
</style>
