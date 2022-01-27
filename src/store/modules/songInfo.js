import { defineStore } from 'pinia'

export const useSongStore = defineStore('songInfo', {
  state: () => {
    return {
      songInfo: null,
      songUrl: null
    }
  }
})
