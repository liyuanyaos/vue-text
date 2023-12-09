<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/valid-v-for -->
<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      captcha: "",
      checked: false,
      show: false,
      indexList: [],
    };
  },
  async created() {
    let res = await axios
      .get("/countries/code/list")
      .catch((err) => console.log(err));
    // console.log(res.data.data);
    this.indexList = res.data.data;
  },

  methods: {
    async sendCode() {
      if (!/^1[356789]\d{9}$/.test(this.phone))
        return console.log("手机号错误");
      if (!this.checked) return alert("请勾选");
      let res = await axios
        .post("http://111.229.247.11:3000/captcha/sent", {
          phone: this.phone,
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(res);
      res;
      this.$router.push({ path: "logins", query: { phone: this.phone } });
    },
    async login() {
      if (!/^\d{4}$/.test(this.captcha)) return alert("验证吗不合法");
      let res = await axios
        .post("http://111.229.247.11:3000/login/cellphone", {
          phone: this.phone,
          captcha: this.captcha,
        })
        .catch((res) => {
          console.log(res);
        });
      res;
      // console.log(res);
    },

    showPopup() {
      this.show = true;
    },
  },
};
</script>
<template>
  <div>
    <div class="flex mt-[10vw] pl-[3vw] pr-[2vw] justify-between">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        t="1701403661950"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        p-id="12167"
        width="20"
        height="20"
        @click="$router.go(-1)"
      >
        <path
          d="M543.651285 512 953.061571 921.410285C961.801831 930.150546 961.801831 944.32131 953.061571 953.061571 944.32131 961.801831 930.150546 961.801831 921.410285 953.061571L512 543.651285 102.589714 953.061571C93.849453 961.801831 79.67869 961.801831 70.938429 953.061571 62.198168 944.32131 62.198168 930.150546 70.938429 921.410285L480.348715 512 70.938429 102.589714C62.198168 93.849453 62.198168 79.67869 70.938429 70.938429 79.67869 62.198168 93.849453 62.198168 102.589714 70.938429L512 480.348715 921.410285 70.938429C930.150546 62.198168 944.32131 62.198168 953.061571 70.938429 961.801831 79.67869 961.801831 93.849453 953.061571 102.589714L543.651285 512 543.651285 512Z"
          fill="#979797"
          p-id="12168"
        />
      </svg>
      <span>游客登录</span>
    </div>
    <div class="flex m-[10vw] justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        t="1701399846078"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        p-id="4278"
        width="80"
        height="80"
      >
        <path
          d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
          fill="#ff0000"
          p-id="4279"
        />
        <path
          d="M800.50625001 517.03541665a233.26875001 233.26875001 0 0 0-38.81250002-77.73749998 278.94375001 278.94375001 0 0 0-74.92499998-67.1625 208.125 208.125 0 0 0-97.81875001-28.74375001l-14.34374999-53.83124999a27.5625 27.5625 0 0 1 7.36874999-24.8625 38.7 38.7 0 0 1 24.8625-12.825 70.425 70.425 0 0 1 38.8125 12.825c4.33125001 2.30625001 7.36875001 5.9625 11.64375001 8.8875a39.375 39.375 0 0 0 56.7-48.15 45.50625001 45.50625001 0 0 0-15.525-19.0125 161.8875 161.8875 0 0 0-60.975-29.41875001 116.60625001 116.60625001 0 0 0-60.1875 0.7875 113.5125 113.5125 0 0 0-41.56875001 25.65 111.4875 111.4875 0 0 0-28.125 35.325 107.26875001 107.26875001 0 0 0-5.9625 77.7375l9.3375 35.8875a194.5125 194.5125 0 0 0-107.94375001 74.5875 175.6125 175.6125 0 0 0-29.47499998 107.15625001 169.70625001 169.70625001 0 0 0 9.3375 50.625 140.11875001 140.11875001 0 0 0 55.125 71.49374999 127.0125 127.0125 0 0 0 93.14999998 17.4375 132.35624999 132.35624999 0 0 0 106.875-134.38124999l-3.88124999-22.5c-8.15625001-31.44375001-16.875-62.49375001-24.46875001-93.6a122.4 122.4 0 0 1 32.56875001 12.43124999 216.3375 216.3375 0 0 1 32.56874999 23.90625001 163.9125 163.9125 0 0 1 49.33125001 75.7125 193.78125001 193.78125001 0 0 1 0 107.6625 172.4625 172.4625 0 0 1-14.79375001 34.93124999 210.76875001 210.76875001 0 0 1-114.91874999 98.60625001 265.44375001 265.44375001 0 0 1-88.93125001 15.91874999 227.1375 227.1375 0 0 1-106.03124999-25.65A251.2125 251.2125 0 0 1 283.00624999 632.34791667a254.7 254.7 0 0 1-14.00624999-123.75000002A250.03125001 250.03125001 0 0 1 427.85 308.23541665a39.375 39.375 0 0 0 8.8875-68.34374999A51.91875001 51.91875001 0 0 0 393.25624999 237.58541665 327.76875001 327.76875001 0 0 0 196.775 470.79791665a334.0125 334.0125 0 0 0 88.14375001 307.91250002 310.66875001 310.66875001 0 0 0 170.09999998 89.99999998 319.95 319.95 0 0 0 94.38750002 0 310.66875001 310.66875001 0 0 0 128.53124999-45 291.88125001 291.88125001 0 0 0 116.49375001-142.87499998 284.11875001 284.11875001 0 0 0 15.525-74.58750002 258.75 258.75 0 0 0-9.45-89.2125zM518.58125001 598.20416666a49.275 49.275 0 0 1-38.81250002-7.36875001 67.5 67.5 0 0 1-25.65-41.84999998 116.325 116.325 0 0 1 0-45 91.2375 91.2375 0 0 1 22.89375001-43.48125001 123.75 123.75 0 0 1 55.125-31.8375l26.775 101.25a142.2 142.2 0 0 1 3.54375001 17.94375001 54.3375 54.3375 0 0 1-43.875 50.34374999z"
          fill="#ffffff"
          p-id="4280"
        />
      </svg>
    </div>
    <div class="h-[16vw] m-[5vw] flex justify-center items-center">
      <div
        class="w-[80vw] h-[16vw] relative rounded-lg pl-[4vw] bg-[#f3f3f4] flex items-center"
      >
        <div class="w-[12vw] h-[10vw] mr-[5vw] text-xl flex items-center">
          +86
        </div>
        <div class="san" @click="showPopup"></div>
        <div class="h-[5vw] w-[0.05vw] ml-[2vw] bg-black"></div>
        <input
          type="tel"
          v-model="phone"
          class="bg-[#f3f3f4] ml-[6vw] w-[45vw] h-[10vw] text-xl flex items-center"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          t="1701401645585"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          p-id="12017"
          width="20"
          height="20"
          @click="phone = ''"
        >
          <path
            d="M512 0c282.7648 0 512 229.2352 512 512s-229.2352 512-512 512S0 794.7648 0 512 229.2352 0 512 0z m-1.4848 450.978133L341.162667 281.6256a34.133333 34.133333 0 0 0-48.273067 0l-11.264 11.264a34.133333 34.133333 0 0 0 0 48.273067l169.352533 169.352533-169.352533 169.352533a34.133333 34.133333 0 0 0 0 48.273067l11.264 11.264a34.133333 34.133333 0 0 0 48.273067 0l169.352533-169.3568 169.352533 169.3568a34.133333 34.133333 0 0 0 48.273067 0l11.264-11.264a34.133333 34.133333 0 0 0 0-48.273067l-169.3568-169.352533 169.3568-169.352533a34.133333 34.133333 0 0 0 0-48.273067l-11.264-11.264a34.133333 34.133333 0 0 0-48.273067 0l-169.352533 169.352533z"
            fill="#909090"
            p-id="12018"
          />
        </svg>
      </div>
    </div>
    <div class="h-[15vw] flex justify-center items-center">
      <div
        class="w-[80vw] rounded-full bg-[#ff3a39] flex justify-center items-center h-[15vw]"
      >
        <span @click="sendCode" class="text-xl text-gray-50 text"
          >获取验证码</span
        >
      </div>
    </div>
    <p class="flex m-[5vw] justify-center items-center">
      <van-checkbox v-model="checked" checked-color="#757c89">
        我已经阅读&nbsp;<span class="text-[#789bc2]">《服务条款》</span>及<span
          class="text-[#789bc2]"
          >《隐私条款》</span
        ></van-checkbox
      >
    </p>
    <van-popup
      v-model="show"
      :closeable="true"
      position="bottom"
      :style="{ height: '80%' }"
    >
      <h1 class="h-[2vh] pt-[1.5vh] flex justify-center items-start">
        请选择国家
      </h1>
      <div class="mt-[5vh]">
        <van-index-bar>
          <van-index-anchor
            v-for="(item, index) in indexList"
            :key="index"
            :index="item.label"
          >
            <div class="pl-[3.5vw]">{{ item.label }}</div>
            <van-cell
              v-for="(items, index) in item.countryList"
              :key="index"
              :title="items.zh"
            >
              +{{ items.code }}
            </van-cell>
          </van-index-anchor>
        </van-index-bar>
      </div>
    </van-popup>
    <!-- <input type="tel" v-model="phone" />
    <button @click="sendCode">发送验证码</button>
    <input type="number" maxlength="4" minlength="4" v-model="captcha" />
    <button @click="login">登录</button> -->
  </div>
</template>
<style scoped>
.san {
  width: 0;
  height: 0;
  border: 2vw solid transparent;
  border-top-color: black;
  position: absolute;
  left: 15vw;
  top: 7vw;
}
/* .van-popup {
  z-index: 2003 !important;
} */
.van-index-bar {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
.van-index-bar__sidebar {
  top: 60% !important;
}
</style>
