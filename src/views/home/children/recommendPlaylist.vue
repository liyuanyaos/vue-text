<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/no-parsing-error -->
<script>
import Card from "./card";
import Scroll from "@/components/scroll";
export default {
  components: { Card, Scroll },
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      first: [],
    };
  },
  created() {
    // console.log(this.resource.creatives);
    // console.log(this.resource.creatives[0].resources);
    this.first = this.resource.creatives[0].resources;
    // this.resource.creatives[0].resource.forEach((v) => {
    //   console.log(v);
    // });
    console.log(this.resource.creatives);
  },
  methods: {
    getid(id) {
      this.$router.push({ path: "/orders", query: { id: id } });
    },
    // getmusicId(id) {
    //   // eslint-disable-next-line no-undef
    //   // this.$router.replace({ name: "Orders", params: { tabId: 2 } });
    //   // console.log(id);
    // },
  },
};
</script>
<template>
  <Card :title="resource.uiElement.subTitle.title">
    <Scroll>
      <div
        class="flex"
        :style="{ width: `${(resource.creatives.length + 2) * 31}vw` }"
      >
        <div class="w-[31vw] h-[38vw] m-[1vw] rounded-sm">
          <van-swipe
            class="my-swipe h-[38vw]"
            :autoplay="3000"
            indicator-color="white"
            vertical
          >
            <van-swipe-item
              v-for="(item, index) in first"
              :key="index"
              @click="getid(item.resourceId)"
              class="flex flex-col h-[34vw] overflow-hidden"
            >
              <img
                class="h-[31vw] w-[31vw] rounded-[8px]"
                :src="item.uiElement.image.imageUrl"
              />
              <div class="text-xs">
                {{ item.uiElement.mainTitle.title }}
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <router-link
          tag="div"
          class="w-[31vw] h-[38vw] flex-col m-[1vw] rounded-sm"
          v-for="(creative, index) in resource.creatives"
          :key="creative.creativeId"
          :to="{ path: '/orders', query: { id: creative.creativeId } }"
          v-show="index > 0"
        >
          <img
            class="w-[31vw] h-[31vw] rounded-[8px]"
            :src="creative.uiElement.image.imageUrl"
            alt=""
          />
          <div class="text-xs">{{ creative.uiElement.mainTitle.title }}</div>
        </router-link>
      </div>
    </Scroll>
  </Card>
</template>
