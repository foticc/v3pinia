<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from 'vue-router';
import { useStore } from "@/store";

const router = useRouter();

const tabs = useStore();


let tabIndex = tabs.active;


const addTab = (targetName) => {

};
const removeTab = (targetName) => {
  tabs.removeTabs(targetName)
};
const tabClick = (pane) => {
  router.push(pane.props.name)
}
</script>

<template>
  <div>
    <el-tabs v-model="tabIndex" type="card" class="demo-tabs" :closable="tabs.single" @tab-remove="removeTab"
      @tab-click="tabClick">
      <el-tab-pane v-for="item in tabs.topTabs" :closable="tabs.single" :key="item.path" :label="item.title"
        :name="item.path">
        <slot />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style>
.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
