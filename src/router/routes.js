import Vue from "vue"
import Router from "vue-router"
import Index from "@/containers/Index"
import Login from "@/pages/Login"
import List from "@/pages/List"
import home from "@/containers/home"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/index/home"
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children:[
        {
          path: "home",
          component: home
        },
        {
          path: "list",
          component: List,
        }
      ]
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
