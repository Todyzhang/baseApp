// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import Login from "./Login"

import util from "../../utils/util"

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  template: '<login />',
  components: {
    Login
  }
}).$mount('#app')
