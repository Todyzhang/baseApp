import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //保存登录用户信息
    user: {}
  },
  mutations: {
    isLogin(state,user) {
      state.user = user
    }
  }
});
