// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import router from "../../router/routes"
import store from "../../store/store"

import util from "../../utils/util"

Vue.config.productionTip = false;

require('@/mock/mock')//此部分引入的是我们所编写的mockjs文档

// 全局导航钩子
router.beforeEach((to, from, next) => {

  if (to.meta.requireAuth) {

    // console.log(isEmptyObject(store.state.user))
    if(!util.isEmptyObject(store.state.user)) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});



/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App }
});
