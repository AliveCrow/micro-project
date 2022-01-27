import { usePlayerStore } from "@/store/modules/player";

const usePlayer = (options) => {
  let audio = document.querySelector('audio')
  if(!audio) {
    audio = document.createElement('audio')
  }
  const Player = usePlayerStore()
  audio.src = options.src
  audio.autoplay = options.autoplay
}

export default usePlayer
