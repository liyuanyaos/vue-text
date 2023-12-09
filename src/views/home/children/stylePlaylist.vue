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
  created() {
    // console.log(this.resource.creatives);
  },
};
</script>
<template>
  <Card :title="resource.uiElement.subTitle.title">
    <Scroll>
      <div
        class="flex"
        :style="{ width: `${this.resource.creatives.length * 100}vw` }"
      >
        <ul
          data-v-fcb07e44=""
          v-for="(item, index) in resource.creatives"
          :key="index"
          class="w-[88vw] scroll-item pb-[3.8vw]"
        >
          <li
            data-v-fcb07e44=""
            class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
            v-for="(items, index) in item.resources"
            :key="index"
          >
            <div data-v-fcb07e44="" class="flex">
              <img
                data-v-fcb07e44=""
                :src="items.uiElement.image.imageUrl"
                alt=""
                class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
              />
              <div data-v-fcb07e44="" class="flex-1 pt-[2.85vw] ml-[1vw]">
                <h4 data-v-fcb07e44="" class="text-[3.5vw] text-[#3E465B]">
                  {{ items.uiElement.mainTitle.title }}
                </h4>
                <p
                  data-v-fcb07e44=""
                  class="dark:text-[#a8aaaf] text-[2.36vw] text-[#79838F]"
                >
                  超过{{ Math.ceil(Math.random() * 100) }}%人播放
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
  </Card>
</template>
