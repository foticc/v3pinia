import { defineStore } from "pinia"

export const useStore = defineStore("context", {
  state: () => ({
    active: "",
    topTabs: [
      {
        path: "/",
        name: "tab1",
        title: "title",
      },
    ],
  }),
  getters: {
    single() {
      return this.topTabs.length > 1
    },
  },
  actions: {
    increment() {},
    addTabs(route) {
      let index = this.topTabs.findIndex((item) => item.path === route.fullPath)
      console.log(index + ":" + route.fullPath)
      if (index == -1) {
        this.topTabs.push({
          path: route.fullPath,
          name: route.name,
          title: route.name,
        })
        this.active = route.fullPath
      }
    },
    removeTabs(path) {
      let index = this.topTabs.findIndex((item) => item.path === path)
      this.topTabs.splice(index, 1)
    },
  },
})
