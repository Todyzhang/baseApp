import Vue from "vue"
import Router from "vue-router"
import Index from "@/containers/Index"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",//命名路由
      component: Index
    },
    {
      path: "/login",
      name: "login",
      meta: {
        //meta元素
        requireAuth: true,
      }
    }
  ]
})
