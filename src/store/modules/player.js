
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('Player', {
  state: () => {
    return {
      src: '',
      autoplay: true
    }
  }
})
