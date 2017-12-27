import Vue from "vue"
import Router from "vue-router"
import Index from "@/containers/Index"
import Login from "@/pages/Login"

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
      component: Login,
      // meta: {
      //   //meta元素
      //   requireAuth: true,
      // }
    }
  ]
})
