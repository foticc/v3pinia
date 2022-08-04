const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/:chapters(\\d+)*",
    name: "index",
    component: () => import("@/views/Index.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/1-1",
    name: "1-1",
    component: () => import("@/components/HelloWorld.vue"),
  },
]

export default routes
