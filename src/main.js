import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/main.css";
// eslint-disable-next-line prettier/prettier
import {
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Popup } from "vant";

Vue.use(Popup);

import {
  IndexBar,
  IndexAnchor,
  PasswordInput,
  NumberKeyboard,
  Checkbox,
  CheckboxGroup,
  Cell,
  Tab,
  Tabs,
  Slider,
  Switch,
  Collapse,
  CollapseItem,
  Circle,
} from "vant";
Vue.use(Circle);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Switch);
Vue.use(Slider);
Vue.use(Tab);
Vue.use(Tabs);
//单选按钮组件
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

//菜单组件
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";
Vue.use(VuePlyr);
//导入视频插件
// import VueCoreVideoPlayer from "vue-core-video-player";

// import AudioPlayer from "@/components/AudioPlayer/index";

// Vue.use(VueCoreVideoPlayer);
// Vue.use(AudioPlayer);
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
Vue.component("VueSlider", VueSlider);
import AudioPlayer from "@/components/AudioPlayer";
Vue.use(AudioPlayer);

//Vue.use(Moudle) Module的要求是什么
//1、Module本身是函数
//2、Module不是函数但是具备一个install
Vue.config.productionTip = false;
// Vue.$use = function (module) {
//   if (typeof module === "function") {
//     module(this); // this -> Vue
//   } else if (typeof module.install === "function") {
//     module.install(this); // this ->Vue
//   }
// };
// Vue.$use()
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
