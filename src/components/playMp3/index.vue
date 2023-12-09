<template>
  <div class="relative h-[100vh] pb-[12vw] bg-slate-500">
    <div
      data-v-8298fe8a=""
      class="absolute z-[3] flex flex-wrap h-[100%] pb-[7.5vw]"
    >
      <div
        data-v-8298fe8a=""
        class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between"
      >
        <svg
          data-v-8298fe8a=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          class="dark:text-[#EEEEEE] text-[6vw] mt-[0.6vw] text-[#fff] iconify iconify--ep"
        >
          <g transform="rotate(180 512 512)">
            <path
              fill="currentColor"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
            ></path>
          </g>
        </svg>
        <div data-v-8298fe8a="" class="text-center w-[60vw]">
          <p
            data-v-8298fe8a=""
            class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1"
          >
            {{ song_name }}
          </p>
          <p
            data-v-8298fe8a=""
            class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]"
          >
            安定區Stable zone
            <span
              data-v-8298fe8a=""
              class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
              >关注</span
            >
          </p>
        </div>
        <svg
          data-v-8298fe8a=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 32 32"
          class="text-[6vw] text-[#fff] iconify iconify--carbon"
        >
          <path
            fill="currentColor"
            d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.79 4.79 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.79 4.79 0 0 0 18 25a5 5 0 1 0 5-5Zm0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3ZM7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3Zm16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3Z"
          ></path>
        </svg>
      </div>
      <div data-v-8298fe8a="" class="relative top-[2%] w-[100vw] h-[120vw]">
        <div
          data-v-8298fe8a=""
          class="absolute top-[10%] left-[50%] translate-x-[-50%] z-[10] rotated w-[30vw] h-[40vw]"
          style="transform: rotate(-45deg)"
        >
          <img
            data-v-8298fe8a=""
            src="/static/needle-ab.png"
            alt=""
            class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
          />
        </div>
        <div
          data-v-8298fe8a=""
          class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
        >
          <div data-v-8298fe8a="" class="absolute w-[80vw] h-[80vw]">
            <img
              data-v-8298fe8a=""
              src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
              alt=""
              class="absolute top-0 w-[80vw] h-[80vw]"
            />
            <img
              data-v-8298fe8a=""
              src="https://admirable-jalebi-ce44af.netlify.app/static/disc_light.png"
              alt=""
              class="w-[80vw] h-[80vw] absolute top-0"
            />
          </div>
          <img
            data-v-8298fe8a=""
            :src="song_picimg_url"
            alt=""
            class="w-[50vw] h-[50vw] absolute top-[15vw] left-[15vw] rounded-[50%] border-[5px] border-[#000] rotateAnimation1 paused-animation"
          />
        </div>
      </div>
      <!---->
      <div data-v-8298fe8a="" class="flex flex-wrap content-end">
        <div
          data-v-8298fe8a=""
          class="w-[100vw] mt-[5vw] flex justify-evenly items-center"
        >
          <div data-v-8298fe8a="">
            <svg
              data-v-8298fe8a=""
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
              class="text-[6vw] text-[#fff] iconify iconify--ant-design"
            >
              <path
                fill="currentColor"
                d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
              ></path>
            </svg>
          </div>
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
            class="text-[5vw] text-[#fff] iconify iconify--streamline"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m4 7l3 3.5L10 7m-3 3.5v-7"></path>
              <circle cx="7" cy="7" r="6.5"></circle>
            </g>
          </svg>
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            class="text-[5vw] text-[#fff] iconify iconify--carbon"
          >
            <path
              fill="currentColor"
              d="M30 30h-2v-5a5.006 5.006 0 0 0-5-5v-2a7.008 7.008 0 0 1 7 7zm-8 0h-2v-5a5.006 5.006 0 0 0-5-5H9a5.006 5.006 0 0 0-5 5v5H2v-5a7.008 7.008 0 0 1 7-7h6a7.008 7.008 0 0 1 7 7zM20 2v2a5 5 0 0 1 0 10v2a7 7 0 0 0 0-14zm-8 2a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z"
            ></path>
          </svg>
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] text-[#fff] iconify iconify--uil"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Zm5-9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Zm-2 4H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2ZM9 9h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2Z"
            ></path>
          </svg>
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] text-[#fff] iconify iconify--ri"
          >
            <path
              fill="currentColor"
              d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3Zm0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18Zm0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5Z"
            ></path>
          </svg>
        </div>
        <div
          data-v-8298fe8a=""
          class="h-[8vw] w-[100vw] flex items-center px-[0vw] mt-[3vw]"
        >
          <div
            data-v-8298fe8a=""
            class="text-[#fff] text-[3.6vw] scale-[0.8] opacity-80"
          >
            <!-- {{ mixin_player.howl?.seek() }} -->
            {{
              Math.floor(mixin_player.howl?.seek() / 60) < 10
                ? "0" + Math.floor(mixin_player.howl?.seek() / 60)
                : Math.floor(mixin_player.howl?.seek() / 60)
            }}:{{
              Math.floor(mixin_player.howl?.seek() % 60) < 10
                ? "0" + Math.floor(mixin_player.howl?.seek() % 60)
                : Math.floor(mixin_player.howl?.seek() % 60)
            }}
          </div>
          <vue-slider :value="mixin_player.propress * 100"></vue-slider>
          <div
            data-v-8298fe8a=""
            class="text-[#fff] text-[3.6vw] scale-[0.8] opacity-50"
          >
            {{
              Math.floor(mixin_player.howl?.duration() / 60) < 10
                ? "0" + Math.floor(mixin_player.howl?.duration() / 60)
                : Math.floor(mixin_player.howl?.duration() / 60)
            }}:{{ Math.floor(mixin_player.howl?.duration() % 60) }}
          </div>
        </div>
        <div
          data-v-8298fe8a=""
          class="h-[12.3vw] flex w-[100vw] items-center justify-evenly"
        >
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 256 256"
            class="text-[#fff] text-[8vw] iconify iconify--fad"
          >
            <g fill="currentColor" fill-rule="evenodd">
              <path
                d="M109.533 197.602a1.887 1.887 0 0 1-.034 2.76l-7.583 7.066a4.095 4.095 0 0 1-5.714-.152l-32.918-34.095c-1.537-1.592-1.54-4.162-.002-5.746l33.1-34.092c1.536-1.581 4.11-1.658 5.74-.18l7.655 6.94c.82.743.833 1.952.02 2.708l-21.11 19.659s53.036.129 71.708.064c18.672-.064 33.437-16.973 33.437-34.7c0-7.214-5.578-17.64-5.578-17.64c-.498-.99-.273-2.444.483-3.229l8.61-8.94c.764-.794 1.772-.632 2.242.364c0 0 9.212 18.651 9.212 28.562c0 28.035-21.765 50.882-48.533 50.882c-26.769 0-70.921.201-70.921.201l20.186 19.568z"
              ></path>
              <path
                d="M144.398 58.435a1.887 1.887 0 0 1 .034-2.76l7.583-7.066a4.095 4.095 0 0 1 5.714.152l32.918 34.095c1.537 1.592 1.54 4.162.002 5.746l-33.1 34.092c-1.536 1.581-4.11 1.658-5.74.18l-7.656-6.94c-.819-.743-.832-1.952-.02-2.708l21.111-19.659s-53.036-.129-71.708-.064c-18.672.064-33.437 16.973-33.437 34.7c0 7.214 5.578 17.64 5.578 17.64c.498.99.273 2.444-.483 3.229l-8.61 8.94c-.764.794-1.772.632-2.242-.364c0 0-9.212-18.65-9.212-28.562c0-28.035 21.765-50.882 48.533-50.882c26.769 0 70.921-.201 70.921-.201l-20.186-19.568z"
              ></path>
            </g>
          </svg>
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="text-[#fff] iconify iconify--fluent"
          >
            <path
              fill="currentColor"
              d="M14 3.002a1 1 0 0 0-1.578-.816l-7 4.963a1 1 0 0 0-.007 1.628l7 5.037A1 1 0 0 0 14 13.003V3.002ZM2 2.5a.5.5 0 0 1 1 0v11a.5.5 0 0 1-1 0v-11Z"
            ></path>
          </svg>
          <div
            class="w-[12vw] h-[12vw] flex justify-center items-center rounded-[50%] bg-white"
            @click="mixin_player.toggle()"
          >
            <Icon
              class="w-[4vw] h-[4vw] bg-white"
              :icon="mixin_player.playing ? 'ic:sharp-pause' : 'ph:play-fill'"
            />
          </div>

          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            class="text-[#fff] iconify iconify--fluent"
          >
            <path
              fill="currentColor"
              d="M3 4.252c0-1 1.116-1.595 1.947-1.038l8.499 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752v-11.5ZM17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13Z"
            ></path>
          </svg>
          <svg
            data-v-8298fe8a=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[3vw] text-[#fff] iconify iconify--iconamoon"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M7 6a1 1 0 0 1-.5.866l-3 1.732A1 1 0 0 1 2 7.732V4.268a1 1 0 0 1 1.5-.866l3 1.732A1 1 0 0 1 7 6Zm-4 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Zm6-5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM3 17a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// '22.22'.toFix()
import axios from "axios";
import { Icon } from "@iconify/vue2";
export default {
  data() {
    return {
      song_data: "",
      song_name: "",
      song_picimg_url: "",
      value: 0,
    };
  },
  async created() {
    console.log(this.$route.query.id);
    let res = await axios
      .get(
        `http://111.229.247.11:3000/song/detail?timestamp=${Date.now()}&ids=` +
          this.$route.query.id
      )
      .catch((err) => {
        return err;
      });
    console.log(res.data);
    this.song_data = res.data.songs[0];
    this.song_name = res.data.songs[0].name;
    console.log(this.song_name);
    this.song_picimg_url = res.data.songs[0].al.picUrl;
  },
  components: { Icon },
};
</script>
<style scoped>
.vue-slider {
  width: 90% !important;
  margin-left: 1vw;
}
</style>
