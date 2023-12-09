<template>
  <div>
    <!-- <h2>video player{{ inputName }}</h2> -->
    <!-- <vue-plyr :options="options">
      <video controls crossorigin playsinline autoplay muted ref="music">
        <source size="576" :src="inputName" type="video/mp4" />
        <a
          download=""
          href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
        >
          Download
        </a>
      </video> </vue-plyr
    >22 -->
    <video id="player" v-if="sourl" ref="music" playsinline controls>
      <source :src="sourl" type="video/mp4" />
    </video>
    <!-- <van-slider class="relative t-[100vw]" v-model="value" @change="onChange" /> -->
    <!-- <vue-core-video-player
      :src="this.$store.state.playaudiourl"
      autoplay
      loop
      muted
    /> -->
  </div>
</template>

<script>
import Plyr from "plyr";
export default {
  name: "Video",
  props: {
    sourl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dataurl: "",
    };
  },
  updated() {
    console.log(this.$refs.music);
    new Plyr(this.$refs.music, {
      controls: ["play-large", "progress"],
      hideControls: false,
    });
  },
};
</script>
