<template>
  <div>
    <div data-v-1247116c="" class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
      <div
        data-v-1247116c=""
        class="flex h-[19vw] items-center justify-between px-[5.5vw]"
      >
        <router-link to="/home"
          ><svg
            data-v-1247116c=""
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="0.44em"
            height="1em"
            viewBox="0 0 7 16"
            class="text-[6vw] iconify iconify--formkit"
          >
            <path
              fill="currentColor"
              d="M5.5 13a.47.47 0 0 1-.35-.15l-4.5-4.5c-.2-.2-.2-.51 0-.71l4.5-4.49c.2-.2.51-.2.71 0c.2.2.2.51 0 .71L1.71 8l4.15 4.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"
            ></path></svg
        ></router-link>
        <div data-v-1247116c="" class="text-[4vw] text-[#696969]">游客登录</div>
      </div>

      <div>
        <p style="font-size: 28px; margin-left: 7vw; margin-top: 10vw">
          输入验证码
        </p>
        <p style="margin-top: 1vw; margin-left: 7vw">
          验证码已发送至{{ $route.query.phone }}
        </p>
        <van-password-input
          :mask="false"
          :value="value"
          :gutter="10"
          :length="4"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
          style="margin-top: 5vw"
        />
        <div class="myDiv">
          <span style="color: #9a9a9a; margin-left: 6vw">重新获取</span>
          <span style="color: #505050; margin-right: 3vw">手机号已停用？</span>
        </div>
        <van-number-keyboard
          v-model="value"
          :show="showKeyboard"
          @blur="showKeyboard = false"
        />
      </div>

      <!-- <div>
                <input type="number" maxlength="4" minlength="4" v-model="captcha" />
                <button @click="login">登录</button>
            </div> -->

      <!-- <div data-v-1247116c="" class="fixed bottom-0">
        <img
          data-v-1247116c=""
          src="../../assets/bg-login.png"
          alt=""
          class="w-[100vw]"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      captcha: "",
      value: "",
      checked: false,
      errorInfo: "",
      showKeyboard: true,
    };
  },
  created() {
    // console.log(this.$route.query);
  },
  watch: {
    value(newval) {
      // console.log(newval);
      if (newval.length == 4) {
        this.login();
      }
    },
  },
  methods: {
    async login() {
      if (!/^\d{4}$/.test(this.value)) return alert("验证吗不合法");
      let obj = {
        phone: this.$route.query.phone,
        captcha: this.value,
      };
      this.$store.dispatch("requestHomepageDragonBall", obj);
    },
  },
};
</script>

<style scoped>
.myDiv {
  margin-top: 2vw;
  display: flex;
  justify-content: space-between;
}
.van-password-input__item {
  border-bottom: 2px solid black !important;
  background: none !important;
}
</style>
