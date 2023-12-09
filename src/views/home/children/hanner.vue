<!-- eslint-disable vue/no-parsing-error -->
<script>
// import Card from "./card";
import Scroll from "@/components/scroll";
export default {
  data() {
    return {
      nowdate: null,
    };
  },
  components: { Scroll },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  filters: {
    getDays(date) {
      // let date = new Date(),
      let strDate = date.getDate(); // 获取当前日(1-31)
      return strDate;
    },
  },
  created() {
    console.log(this.resource);
  },
};
</script>
<template>
  <!-- <Card :title="resource.uiElement.subTitle.title"> -->
  <Scroll>
    <div
      class="flex"
      :style="{ width: `${resource.creatives[0].resources.length * 31}vw` }"
    >
      <div
        class="w-[25vw] h-[25vw] relative flex flex-col justify-center items-center"
        v-for="(item, index) in resource.creatives[0].resources"
        :key="index"
      >
        <span
          v-if="index == 0"
          class="absolute text-white text-xs top-[50%] translate-y-[-3vw]"
          >{{ new Date() | getDays }}</span
        >
        <img
          class="w-[15vw] h-[15vw]"
          :src="item.uiElement.image.imageUrl2"
          alt=""
        />
        <div class="text-xs">{{ item.uiElement.mainTitle.title }}</div>
      </div>
    </div>
  </Scroll>
  <!-- </Card> -->
</template>
