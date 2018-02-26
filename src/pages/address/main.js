// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Base from "@/utils/base"
import App from "./App"
import router from "./routes"

Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  next();
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App />",
  components: { App }
});
