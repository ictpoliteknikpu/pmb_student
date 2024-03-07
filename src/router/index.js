import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/",
      component: () => import("@/view/home"),
      meta: {
        title: "Home Page",
      },
    },
    {
      path: "/pages/blank-page",
      name: "blank-page",
      component: () => import("@/view/pages/blank"),
      meta: {
        title: "Blank Page",
        breadcrumb: [
          {
            text: "Pages"
          }
        ]
      },
    },
    {
      path: "/pages/error-404",
      name: "error-404",
      component: () => import("@/view/pages/errors/404"),
      meta: {
        layout: "full",
      },
    },
    {
      path: '*',
      component: () => import("@/view/pages/errors/404"),
      meta: {
        layout: "full",
      },
    },
  ]
})

export default router