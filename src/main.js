import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHashHistory } from "vue-router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import routes from "./routes"

import "./style.css"
import App from "./App.vue"

import { useStore } from "@/store"

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.afterEach((to, from) => {
  useStore().addTabs(to)
})

createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .mount("#app")
