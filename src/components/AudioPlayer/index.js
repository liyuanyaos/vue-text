import Main from "./audio.vue";
import Player from "./player";
// import player from "./player";
// export default (Vue) => Vue.component(Main.name, Main);
// export default Main;
console.log(Main.name);
const player = new Player();
export default {
  install(Vue) {
    Vue.component(Main.name, Main);
    Vue.mixin({
      computed: {
        mixin_player() {
          return Vue.observable(player);
        },
      },
    });
  },
};
