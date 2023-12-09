<template>
  <div>
    <div
      class="bg-black w-screen h-screen pb-[-12vw] flex flex-wrap absolute pb-[12vw]"
    >
      <div
        class="flex justify-between items-center px-[6vw] pt-[3vw] w-[100%] h-[12vw]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 1024 1024"
          class="text-[6vw] text-[#fefefe] iconify iconify--ep"
        >
          <g transform="rotate(-90 512 512)">
            <path
              fill="currentColor"
              d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
            ></path>
          </g>
        </svg>
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] text-[#fefefe] mr-[7vw] iconify iconify--fluent"
          >
            <path
              fill="currentColor"
              d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25V12h-1.5V6.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 6.25v9.5c0 .966.784 1.75 1.75 1.75H11V19H5.25A3.25 3.25 0 0 1 2 15.75v-9.5ZM14 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-7ZM5.22 6.22a.75.75 0 0 1 1.06 0L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 0-1.06Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[6vw] text-[#fefefe] iconify iconify--ri"
          >
            <path
              fill="currentColor"
              d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="w-[100%] h-[54vw] absolute top-[12%]">
        <Demo :sourl="mvurl"></Demo>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[14vw] text-[rgba(255,255,255,0.4)] iconify iconify--solar"
          style="display: none"
        >
          <path
            fill="currentColor"
            d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
          ></path>
        </svg>
      </div>
      <div class="w-[100%] absolute bottom-[0vw]">
        <div class="flex justify-between px-[4vw] items-end pb-[3vw]">
          <div class="flex-1 mr-[10vw]">
            <div class="flex items-center mb-[3vw]">
              <img
                :src="userobj.cover"
                alt=""
                class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]"
              />
              <span class="mx-[2vw] text-[#ffffff] text-[4vw]">{{
                userobj.artistName
              }}</span>
              <div
                class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="text-[#fff] text-[4vw] iconify iconify--mingcute"
                >
                  <g fill="none">
                    <path
                      d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5V20Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <van-collapse v-model="activeNames" class="mb-[10vw] bg-black">
              <van-collapse-item name="1">
                <template #title>
                  <div class="flex bg-black">
                    <h1 class="text-[3.2vw] flex">
                      <span
                        class="w-[7.3vw] h-[4vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]"
                        >MV</span
                      >
                    </h1>
                    <span class="text-white"> {{ userobj.name }}</span>
                  </div>
                </template>
                “风把你给带走 就像你没来过 我没爱过 把心都给掏空”
                队长EP《碎碎念》主打单曲《风》MV正式上线
              </van-collapse-item>
            </van-collapse>
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                class="text-[4vw] text-[#b3b3b3] iconify iconify--entypo"
              >
                <path
                  fill="currentColor"
                  d="M14.971 9.438c-.422.656-.646.375-.52 0c.336-.993.348-4.528-2.451-4.969L11.998 16c0 1.657-1.735 4-4.998 4c-1.657 0-3-.871-3-2.5c0-2.119 1.927-3.4 4-3.4c1.328 0 2 .4 2 .4V0h2c0 2.676 5.986 4.744 2.971 9.438z"
                ></path>
              </svg>
              <marquee class="text-white w-[25vw]">
                {{ userobj.name }}
              </marquee>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
                class="text-[4vw] text-[#fff] iconify iconify--ant-design"
              >
                <path
                  fill="currentColor"
                  d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="w-[10vw]">
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--bxs"
              >
                <path
                  fill="currentColor"
                  d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
                ></path>
              </svg>
              <span class="text-[#eaeaea] w-[10vw] text-center text-[3vw]">{{
                count.likedCount
              }}</span>
            </div>
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--uis"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.5 2 2 6.5 2 12c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4c.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S17.5 2 12 2zM8 13c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1zm4 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1z"
                ></path>
              </svg>
              <span class="text-[#eaeaea] w-[10vw] text-center text-[3vw]">{{
                count.commentCount
              }}</span>
            </div>
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--majesticons"
              >
                <path
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19l6.4-7z"
                ></path>
              </svg>
              <span class="text-[#eaeaea] w-[10vw] text-center text-[3vw]">{{
                count.shareCount
              }}</span>
            </div>
            <div class="flex items-center flex-wrap justify-center mb-[4vw]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="text-[6vw] mb-[2vw] text-[#eaeaea] iconify iconify--fluent"
              >
                <path
                  fill="currentColor"
                  d="M9.113 8.8c.34-.297.744-.526 1.19-.661l.247-.065l.16-.03l.176-.025l.18-.015l.184-.005h7.5a3.25 3.25 0 0 1 3.245 3.065l.005.185v7.5a3.25 3.25 0 0 1-3.066 3.245l-.184.005h-7.5a3.25 3.25 0 0 1-3.245-3.066L8 18.75v-7.5l.003-.149l.014-.19l.026-.191l.036-.186l.059-.223l.08-.236l.087-.202l.082-.162l.094-.163l.146-.217l.094-.123l.135-.156l.108-.112l.149-.139ZM15 11a.75.75 0 0 0-.743.648l-.007.102v2.499h-2.5a.75.75 0 0 0-.743.648l-.007.102c0 .38.282.693.648.743l.102.007h2.5v2.501c0 .38.282.694.648.743L15 19a.75.75 0 0 0 .743-.648l.007-.102v-2.501h2.5a.75.75 0 0 0 .743-.649L19 15a.75.75 0 0 0-.648-.743l-.102-.007h-2.5v-2.5a.75.75 0 0 0-.648-.743L15 11Zm.582-6.767l.052.177l.694 2.588H11.25A4.25 4.25 0 0 0 7 11.249v6.434a3.252 3.252 0 0 1-2.895-2.228l-.052-.176l-1.941-7.245a3.25 3.25 0 0 1 2.12-3.928l.178-.052l7.244-1.941a3.25 3.25 0 0 1 3.928 2.12Z"
                ></path>
              </svg>
              <span class="text-[#eaeaea] text-[3vw]">收藏</span>
            </div>
            <div class="relative flex items-center justify-center">
              <img
                src="/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
                alt=""
                class="w-[10vw] h-[10vw] rounded-[50%]"
              />
              <img
                alt=""
                id="anm"
                class="w-[7vw] h-[7vw] rounded-[50%] absolute rotateAnimation"
                src="http://p1.music.126.net/VGtNVVoG4xMIFwIO-4hQbw==/109951169106216286.jpg"
              />
            </div>
          </div>
        </div>
        <div
          class="text-[5vw] flex items-center justify-center h-[44vw]"
          style="display: none"
        >
          <span class="text-[#ffffff]">00:00</span>
          <span class="text-[#666666]">/00:00</span>
        </div>
        <div
          class="videoProgressBar vue-slider vue-slider-ltr"
          style="padding: 7px 0px; width: auto; height: 4px"
        >
          <div class="vue-slider-rail">
            <div
              class="vue-slider-process"
              style="
                height: 100%;
                top: 0px;
                left: 0%;
                width: 0%;
                transition-property: width, left;
                transition-duration: 0s;
              "
            ></div>
            <div
              aria-valuetext="0"
              class="vue-slider-dot"
              role="slider"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-orientation="horizontal"
              tabindex="0"
              style="
                width: 14px;
                height: 14px;
                transform: translate(-50%, -50%);
                top: 50%;
                left: 0%;
                transition: left 0s ease 0s;
              "
            >
              <div class="vue-slider-dot-handle"></div>
            </div>
          </div>
        </div>
        <div
          class="w-[100%] flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]"
        >
          发条评论结识有趣的人
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="text-[4vw] iconify iconify--bx"
          >
            <g transform="rotate(-90 12 12)">
              <path
                fill="currentColor"
                d="M5 12H3v9h9v-2H5zm7-7h7v7h2V3h-9z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { getmvurl } from "@/service/index";
import axios from "axios";
// import Plyr from "plyr";
import Demo from "./demon";
import stroe from "@/store/index";
let request = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 15000, // 毫秒
});

request.interceptors.request.use((config) => {
  const cookie = stroe.state.auth.data.cookie;
  if (cookie) {
    if (config.method === "post") {
      config.data || (config.data = {});
      config.data.cookie = cookie;
    }
    if (config.method === "get") {
      config.params || (config.params = {});
      config.params.cookie = cookie;
    }
  }
  return config;
});

export default {
  data() {
    return {
      mvurl: "",
      count: {},
      userobj: {},
      activeNames: ["0"],
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Demo,
  },
  async created() {
    // console.log(this.$store.state.auth.data.cookie);
    console.log(this.$route.query.id);
    let res = await axios({
      method: "post",
      url: `http://111.229.247.11:3000/mv/url?timestamp=${Date.now()}`,
      data: {
        id: this.$route.query.id,
        cookie: this.$store.state.auth.data.cookie,
      },
    });
    console.log(res);
    this.mvurl = res.data.data.url;
    console.log(this.mvurl);
    // .then((data) => {
    //     this.mvurl = data.data.data.url;
    //     this.$store.commit("updateplayUrl", this.mvurl);
    //   });
    axios({
      method: "post",
      url: "http://111.229.247.11:3000/mv/detail/info",
      data: {
        mvid: this.$route.query.id,
        cookie: this.$store.state.auth.data.cookie,
      },
    }).then((data) => {
      console.log(data.data);
      this.count = data.data;
    });

    axios({
      method: "post",
      url: `http://111.229.247.11:3000/mv/detail?timestamp=${Date.now()}`,
      data: {
        mvid: this.$route.query.id,
        cookie: this.$store.state.auth.data.cookie,
      },
    }).then((data) => {
      this.userobj = data.data.data;
      console.log(this.userobj);
      // this.count = data.data;
    });
  },
  mounted() {
    // const player = new Plyr(this.$refs.player, {
    //   // options
    // });
    // console.log(this.mvurl);
  },
};
</script>
<style scoped>
.plyr {
  height: 360px;
  width: 640px;
}
#anm {
  animation: donghua infinite 10s;
}
@keyframes donghua {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
*::selection {
  background: none;
}
:deep(.van-cell) {
  background-color: black !important;
}
:deep(.van-collapse-item__content) {
  background-color: black !important;
}
:deep([class*="van-hairline"]::after) {
  border: none;
}
:deep(.van-collapse-item__title--expanded::after) {
  display: none;
}
:deep(.van-cell) {
  padding-left: 0;
}
:global(.vcp-progress) {
  top: 125vw !important;
}
:global(.vcp-container > video) {
  width: 100vw;
  height: 54vw;
  object-fit: cover;
}
:global(.plyr__controls) {
  position: fixed !important;
  top: 83vh;
}
</style>
