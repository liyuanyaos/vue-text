<template>
  <div>
    <h1 class="flex pt-[2vw] justify-center items-center font-medium">
      MV排行榜
    </h1>
    <van-tabs v-model="active">
      <van-tab title="内地">
        <div id="abou" class="pr-[4vw]">
          <div
            class="w-[92vw] m-auto"
            v-for="(item, index) in adountmvdata"
            :key="item.id"
          >
            <div class="w-[100%] m-[2vw] h-[52vw] relative">
              <img
                @click="sendmvid(item.id)"
                :src="item.cover"
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                  style="color: rgb(253, 255, 255)"
                >
                  <path
                    fill="currentColor"
                    d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
                  ></path></svg
                >{{ item.playCount }}
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ index + 1 }}</span
                ><span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex h-[4vw] items-center">
                <div
                  class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                >
                  -
                </div>
                <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                  <span>{{ item.artistName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="港台">
        <div id="abou" class="pr-[4vw]">
          <div
            class="w-[92vw] m-auto"
            v-for="(item, index) in adountmvdata1"
            :key="item.id"
          >
            <div class="w-[100%] m-[2vw] h-[52vw] relative">
              <img
                @click="sendmvid(item.id)"
                :src="item.cover"
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                  style="color: rgb(253, 255, 255)"
                >
                  <path
                    fill="currentColor"
                    d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
                  ></path></svg
                >{{ item.playCount }}
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ index + 1 }}</span
                ><span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex h-[4vw] items-center">
                <div
                  class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                >
                  -
                </div>
                <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                  <span>{{ item.artistName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="欧美">
        <div id="abou" class="pr-[4vw]">
          <div
            class="w-[92vw] m-auto"
            v-for="(item, index) in adountmvdata2"
            :key="item.id"
          >
            <div class="w-[100%] m-[2vw] h-[52vw] relative">
              <img
                @click="sendmvid(item.id)"
                :src="item.cover"
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                  style="color: rgb(253, 255, 255)"
                >
                  <path
                    fill="currentColor"
                    d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
                  ></path></svg
                >{{ item.playCount }}
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ index + 1 }}</span
                ><span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex h-[4vw] items-center">
                <div
                  class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                >
                  -
                </div>
                <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                  <span>{{ item.artistName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="韩国">
        <div id="abou" class="pr-[4vw]">
          <div
            class="w-[92vw] m-auto"
            v-for="(item, index) in adountmvdata3"
            :key="item.id"
          >
            <div class="w-[100%] m-[2vw] h-[52vw] relative">
              <img
                @click="sendmvid(item.id)"
                :src="item.cover"
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                  style="color: rgb(253, 255, 255)"
                >
                  <path
                    fill="currentColor"
                    d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
                  ></path></svg
                >{{ item.playCount }}
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ index + 1 }}</span
                ><span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex h-[4vw] items-center">
                <div
                  class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                >
                  -
                </div>
                <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                  <span>{{ item.artistName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="日本">
        <div id="abou" class="pr-[4vw]">
          <div
            class="w-[92vw] m-auto"
            v-for="(item, index) in adountmvdata4"
            :key="item.id"
          >
            <div class="w-[100%] m-[2vw] h-[52vw] relative">
              <img
                @click="sendmvid(item.id)"
                :src="item.cover"
                class="w-[100%] h-[52vw] bg-black rounded-[3vw] mb-[2.7vw]"
              />
              <div
                class="absolute top-[2vw] text-[#fff] right-[2vw] text-[2.6vw] flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="iconify iconify--solar mr-[0.5vw] text-[2.6vw]"
                  style="color: rgb(253, 255, 255)"
                >
                  <path
                    fill="currentColor"
                    d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968Z"
                  ></path></svg
                >{{ item.playCount }}
              </div>
            </div>
            <div class="h-[15vw] flex items-center flex-wrap">
              <div class="flex h-[5vw] w-[100vw]">
                <span
                  class="w-[5.3vw] text-[4.3vw] mr-[2.8vw] text-center text-[red]"
                  >{{ index + 1 }}</span
                ><span
                  class="flex-1 line-clamp-1 text-[#000] text-[4vw] font-semibold h-[5vw]"
                  >{{ item.name }}</span
                >
              </div>
              <div class="flex h-[4vw] items-center">
                <div
                  class="w-[5.3vw] text-[#999999] text-[2vw] mr-[2.8vw] flex items-center justify-center"
                >
                  -
                </div>
                <div class="flex-1 line-clamp-1 text-[#7c7c7c] text-[2vw]">
                  <span>{{ item.artistName }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <div
      data-v-5c239f42=""
      data-v-e4fc58ca=""
      class="box bg-white w-[100vw] flex items-center fixed bottom-0 left-0"
    >
      <div
        data-v-5c239f42=""
        class="flex-1 flex flex-col items-center"
        @click="$router.push('/home')"
      >
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          class=""
        >
          <g data-v-5c239f42="" fill="none">
            <path
              data-v-5c239f42=""
              d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
            ></path>
            <path
              data-v-5c239f42=""
              fill="currentColor"
              d="M10.975 3.002a1 1 0 0 1-.754 1.196a8 8 0 1 0 8.446 3.379a1 1 0 1 1 1.666-1.107A9.958 9.958 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12c0-4.76 3.325-8.742 7.779-9.752a1 1 0 0 1 1.196.754M13 3.014a1.01 1.01 0 0 1 1.214-.99l.115.031l2.987.996a1 1 0 0 1-.52 1.928l-.112-.03L15 4.387V12a3 3 0 1 1-2.19-2.89l.19.06V3.015Z"
            ></path>
          </g>
        </svg>
        <p data-v-5c239f42="" class="text-[3.5vw]">首页</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          class="text-[red]"
        >
          <path
            data-v-5c239f42=""
            fill="currentColor"
            d="M2 21V9h5.5v12zm7.25 0V3h5.5v18zm7.25 0V11H22v10z"
          ></path>
        </svg>
        <p data-v-5c239f42="" class="text-[red]">排行榜</p>
      </div>
      <div
        data-v-5c239f42=""
        class="flex-1 flex flex-col items-center"
        @click="$router.push('/mylogin')"
      >
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 32 32"
        >
          <path
            data-v-5c239f42=""
            fill="currentColor"
            d="M25 4H10a2.002 2.002 0 0 0-2 2v14.556A3.955 3.955 0 0 0 6 20a4 4 0 1 0 4 4V12h15v8.556A3.955 3.955 0 0 0 23 20a4 4 0 1 0 4 4V6a2.002 2.002 0 0 0-2-2M6 26a2 2 0 1 1 2-2a2.002 2.002 0 0 1-2 2m17 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2M10 6h15v4H10Z"
          ></path>
        </svg>
        <p data-v-5c239f42="" class="text-[3.5vw]">我的</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g data-v-5c239f42="" fill="none" fill-rule="evenodd">
            <path
              data-v-5c239f42=""
              d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092"
            ></path>
            <path
              data-v-5c239f42=""
              fill="currentColor"
              d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22c.23 0 .46-.002.685-.005a1 1 0 0 0 .89-1.428A5.973 5.973 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557c-.43-.046-.87-.07-1.317-.07m10.708 3.068a1 1 0 0 0-1.414-1.414l-3.182 3.182l-1.414-1.414a1 1 0 0 0-1.414 1.414l2.05 2.05a1.1 1.1 0 0 0 1.556 0l3.818-3.818"
            ></path>
          </g>
        </svg>
        <p data-v-5c239f42="" class="text-[3.5vw]">关注</p>
      </div>
      <div data-v-5c239f42="" class="flex-1 flex flex-col items-center">
        <svg
          data-v-5c239f42=""
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 576 512"
        >
          <path
            data-v-5c239f42=""
            fill="currentColor"
            d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32C100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6l68-34.1c24.4 4.8 43.8 9.7 68.2 9.7c6.2 0 12.1-.3 18.3-.8c-4-12.9-6.2-26.6-6.2-40.8c-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4c0 14.5-9.7 24.2-24.2 24.2c-14.8 0-29.3-9.7-29.3-24.2c.1-14.7 14.6-24.4 29.3-24.4m-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2c0-14.8 14.8-24.4 29.3-24.4c14.8 0 24.4 9.7 24.4 24.4c0 14.6-9.6 24.2-24.4 24.2M563 319.4c0-77.9-77.9-141.3-165.4-141.3c-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3l-14.8-48.6C534 402.1 563 363.2 563 319.4m-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.8 0 24.4 9.7 24.4 19.3c0 10-9.7 19.6-24.4 19.6m107.1 0c-9.7 0-19.3-9.7-19.3-19.6c0-9.7 9.7-19.3 19.3-19.3c14.5 0 24.4 9.7 24.4 19.3c.1 10-9.9 19.6-24.4 19.6"
          ></path>
        </svg>
        <p data-v-5c239f42="" class="text-[3.5vw]">社区</p>
      </div>
    </div>
  </div>
</template>
<script>
import { getabount } from "@/service/index";
import axios from "axios";
export default {
  data() {
    return {
      active: 0,
      adountmvdata: [],
      adountmvdata1: [],
      adountmvdata2: [],
      adountmvdata3: [],
      adountmvdata4: [],
    };
  },
  async created() {
    let [err, data] = await getabount();
    if (err) return false;
    console.log(data.data.data);
    this.adountmvdata = data.data.data;

    axios.post("http://111.229.247.11:3000/mv/all?area=港台").then((data) => {
      this.adountmvdata1 = data.data.data;
    });
    axios.post("http://111.229.247.11:3000/mv/all?area=欧美").then((data) => {
      this.adountmvdata2 = data.data.data;
    });
    axios.post("http://111.229.247.11:3000/mv/all?area=韩国").then((data) => {
      this.adountmvdata3 = data.data.data;
    });
    axios.post("http://111.229.247.11:3000/mv/all?area=日本").then((data) => {
      this.adountmvdata4 = data.data.data;
    });
  },
  methods: {
    sendmvid(id) {
      console.log(id);
      this.$router.push(`playmv/?id=${id}`);
    },
  },
};
</script>
