<template>
  <div id="page">
    <div style="width: 100%" class="flex-container column">
      <video id="video" src="@/assets/bgm/bgm3.mp3" controls="controls" hidden="hidden" autoplay="autoplay"
             loop="loop"></video>

      <img id="img" class="play" style="transform: translate(-1584.4%, 121.5%) scale(1)" :src="sound" @click="play()">

    </div>
  </div>
</template>


<script>
  export default {
    name: 'Bgm',
    data() {
      return {
        sound: require('../static/img/33.png'),
      }
    },
    methods: {
      play() {
        let vo = document.getElementById("video")
        if (this.sound == require('../static/img/33.png')) {
          this.sound = require('../static/img/22.png')
          vo.autoplay = true
          vo.play()
        } else {
          this.sound = require('../static/img/33.png')
          vo.pause()
        }
      }
    }
  }
</script>