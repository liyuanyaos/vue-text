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
    // console.log();
  },
};
</script>
<template>
  <div>
    <Card :title="resource.uiElement.subTitle.title">
      <Scroll>
        <div
          class="flex"
          :style="{ width: `${resource.creatives.length * 31}vw` }"
        >
          <div
            class="w-[30vw] m-[2vw]"
            v-for="creative in resource.creatives"
            :key="creative.id"
          >
            <img
              class="w-[30vw] h-[30vw] border-1 rounded-[8px]"
              :src="creative.uiElement.image.imageUrl"
              alt=""
            />
            <div class="text-xs text-ellipsis overflow-hidden">
              {{ creative.uiElement.mainTitle.title }}
            </div>
          </div>
        </div>
      </Scroll>
    </Card>
  </div>
</template>
