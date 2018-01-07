// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"

import util from "../../utils/util"

Vue.config.productionTip = false;

require('@/mock/mock')//此部分引入的是我们所编写的mockjs文档

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});
