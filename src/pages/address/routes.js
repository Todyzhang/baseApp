import Vue from "vue"
import Router from "vue-router"
import List from "./pages/List"
import New from "./pages/New"


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/new"
    },
    {
      path: "/new",
      name: "new",
      component: New,

    }
  ]
})
