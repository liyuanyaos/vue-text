import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
import { getHomePageData } from "@/service/index";
import axios from "axios";
// import {
//   SET_COUNT
// } from "./mutations.type";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    a: 123,
    blocks: [],
    auth: {},
    isDarkModule: false,
    playaudiourl: "//media.vued.vanthink.cn/sparkle_your_name_am720p.mp4",
    tracks: [],
  },
  getters: {},
  mutations: {
    // [SET_COUNT](state, payload = 10) {
    //   state.count += payload;
    // },
    updateplayUrl(state, url) {
      console.log(url);
      state.playaudiourl = url;
    },
    increaser(state) {
      state.a++;
    },
    updateBlocks(state, data) {
      // console.log(state);
      state.blocks = data.data.data.blocks;
    },
    upadmin(state, data) {
      state.auth = data;
    },
    close(state) {
      state.auth = {};
    },
    updarkmodule(state, data) {
      state.isDarkModule = data;
    },
  },
  actions: {
    async requestgetHomePageData(store) {
      const [err, homePageData] = await getHomePageData();
      if (err) return false;
      store.commit("updateBlocks", homePageData);
    },
    async requestHomepageDragonBall(store, data) {
      console.log(data);
      let res = await axios
        .post("http://111.229.247.11:3000/login/cellphone", data)
        .catch(() => {
          return null;
        });
      if (!res) return false;
      store.commit("upadmin", res);
    },
  },
  plugins: [persistedstate()],
});
window.store = store;
export default store;
