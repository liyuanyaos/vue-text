<script>
// import axios from "axios";
export default {
  // components: {  },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgdata: [],
      Bankbanners: [],
    };
  },
  // created() {
  //   axios.get("/banner").then((data) => {
  //     // console.log(data.data);
  //     this.imgdata = data;
  //     this.Bankbanners = this.imgdata.data.banners;
  //   });
  //   // console.log(this.resource.extInfo.banners);
  // },
  created() {
    console.log(this.resource);
  },
};
</script>

<template>
  <div>
    <div class="swipe_box w-[100vw] p-[3vw] bg-purple-200">
      <van-swipe
        class="my-swipe border-2 rounded-[25px]"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item
          v-for="(item, index) in resource.extInfo.banners"
          :key="index"
        >
          <img
            class="h-[40vw] w-[90vw] border-2 rounded-[25px]"
            :src="item.pic"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
