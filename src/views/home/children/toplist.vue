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
  <div>
    <Card :title="resource.uiElement.subTitle.title"></Card>
    <Scroll>
      <div
        class="flex"
        :style="{ width: `${resource.creatives.length * 100}vw` }"
      >
        <ul
          data-v-7affce21=""
          class="ml-[2vw] dark:bg-[#25272e] dark:bg-gradient-n dark:from-000 dark:via-000 dark:to-000 shadows w-[88vw] scroll-item bg-[#fff] mr-[2vw] rounded-[10px] pt-[4vw] pb-[3.8vw] bg-gradient-to from-ff8177 via-ff8c7f to-b12a5b mb-[2vw]"
          style="pointer-events: auto"
          v-for="(item, index) in resource.creatives"
          :key="index"
        >
          <li
            data-v-7affce21=""
            class="pl-[2vw] w-[88vw] scroll-content pr-[5vw]"
          >
            <div
              data-v-7affce21=""
              class="flex justify-between items-center h-[12vw]"
            >
              <div data-v-7affce21="" class="flex items-center">
                <span
                  data-v-7affce21=""
                  class="dark:text-[#e6e6e9] text-[#374d5b] text-[4vw] font-[800]"
                >
                  {{ item.uiElement.mainTitle.title }}
                </span>
                <svg
                  data-v-7affce21=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  class="dark:text-[#e6e6e9] font-[800] text-[#3d475b] iconify iconify--mingcute"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path
                      d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657"
                    ></path>
                  </g>
                </svg>
              </div>
              <span
                data-v-7affce21=""
                class="dark:text-[#8e9097] text-[#939BA1]"
              >
                {{ item.uiElement.mainTitle.titleDesc }}
              </span>
            </div>
          </li>
          <li
            data-v-7affce21=""
            class="pl-[2vw] w-[88vw] scroll-content pt-[2.7vw]"
            v-for="(items, index) in item.resources"
            :key="index"
          >
            <div data-v-7affce21="" class="flex">
              <img
                data-v-7affce21=""
                :src="items.uiElement.image.imageUrl"
                alt=""
                class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5"
              />
              <div
                data-v-7affce21=""
                class="flex-1 ml-[1vw] flex items-center pr-[5.7vw] pl-[3.26vw]"
              >
                <div
                  data-v-7affce21=""
                  class="leading-[14vw] font-[800] flex-3 mr-[3vw] text-[#C28E28] text-[2.8vw]"
                >
                  {{ index + 1 }}
                </div>
                <div data-v-7affce21="" class="w-[40vw]">
                  <h4
                    data-v-7affce21=""
                    class="dark:text-[#ebeaf0] text-[3.5vw] text-[#3E465B] text-ellipsis overflow-hidden whitespace-nowrap w-[40vw]"
                  >
                    {{ items.uiElement.mainTitle.title }}
                  </h4>
                  <p
                    data-v-7affce21=""
                    class="dark:text-[#a5a7ae] text-[2.36vw] text-[#79838F]"
                  >
                    {{ items.resourceExtInfo.songData.artists[0].name }}
                  </p>
                </div>
                <div
                  data-v-7affce21=""
                  class="leading-[14vw] flex-3 ml-[4vw] text-[2.43vw]"
                >
                  <span data-v-7affce21="" class="text-[#FF3836]">{{
                    items.uiElement.labelText.text || "热门"
                  }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Scroll>
  </div>
</template>
