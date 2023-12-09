<template>
  <div id="app" :class="{ dark: $store.state.isDarkModule }">
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  created() {
    this.$store.dispatch("requestgetHomePageData");
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* body {
  overflow: hidden;
} */
#app {
  width: 100vw;
  overflow-x: hidden;
}
.slide-fade-enter-active {
  transition: all 0.8s;
}
/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
:deep(.myfixed) {
  position: fixed;
  bottom: 0;
  left: 0;
}
.red-image[data-v-8298fe8a] {
  filter: url(data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27><filter id=%27colorize%27><feColorMatrix type=%27matrix%27 values=%271 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0%27/></filter></svg>#colorize);
}
</style>
