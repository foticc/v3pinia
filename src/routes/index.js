const routes = [
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
    component: () => import("@/components/Tabs.vue"),
  },
]

export default routes
