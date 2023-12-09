<script>
import player from "./player";
const players = new player();
window.player = players;
export default {
  name: "Audioplay",
  data() {
    return {
      audioPlayer: null,
      track: ["7328551049", "566436427"],
    };
  },
  created() {
    // this.audioPlayer = new Howl({
    //   src: [
    //     "http://m701.music.126.net/20231206191815/4b69757d55ad5147747bcff1a349d298/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/29327259033/112e/05fd/b0aa/dd9dcc7710581905f81d9cd0c6669118.mp3",
    //   ],
    // });
  },
  methods: {
    play() {
      this.audioPlayer.play();
    },
    f1() {
      players.replaceTracks(this.track);
    },
  },
};
//vue.use
//vue.ob
//vue.mixin
</script>
<template>
  <div></div>
</template>
