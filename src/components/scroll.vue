<script>
import BScroll from "@better-scroll/core";
export default {
  props: {
    config: {
      type: Object,
      default: () => ({ scrollX: true, mouseWheel: true, click: true }),
    },
  },
  mounted() {
    new BScroll(this.$refs.wrapper, this.config);
  },
};
</script>
<template>
  <div class="wrapper bg-white dark:bg-black" ref="wrapper">
    <slot />
  </div>
</template>
