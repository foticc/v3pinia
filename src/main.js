import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHashHistory } from "vue-router"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import routes from "./routes"

import "./style.css"
import App from "./App.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App)
  .use(createPinia())
  .use(router)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .mount("#app")
