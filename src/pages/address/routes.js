import Vue from "vue"
import Router from "vue-router"
import List from "./views/List"
import Add from "./views/Add"

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: List
    },
    {
      path: "/add",
      name: "add",
      component: Add

    }
  ]
})
