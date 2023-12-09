<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      msg: "",
    };
  },
  methods: {
    showPopup(title) {
      this.show = true;
      this.msg = title;
    },
  },
};
</script>
<template>
  <div class="mt-[1vw] dark:bg-black dark:text-white">
    <div class="p-[3vw] pt-[3vw] pb-[1vw] flex items-center justify-between">
      <div>{{ title }}</div>
      <div>
        <svg
          @click="showPopup(title)"
          data-v-3b54968e=""
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          width="8"
          height="8"
          viewBox="0 0 24 24"
          class="dark:text-[#09090b] text-[#3d475b] w-[4vw] h-[6vw] iconify iconify--ri"
        >
          <path
            fill="currentColor"
            d="M12 3c-.825 0-1.5.675-1.5 1.5S11.175 6 12 6s1.5-.675 1.5-1.5S12.825 3 12 3m0 15c-.825 0-1.5.675-1.5 1.5S11.175 21 12 21s1.5-.675 1.5-1.5S12.825 18 12 18m0-7.5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5s1.5-.675 1.5-1.5s-.675-1.5-1.5-1.5"
          ></path>
        </svg>
      </div>
    </div>
    <div>
      <slot />
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">{{
      msg
    }}</van-popup>
  </div>
</template>
