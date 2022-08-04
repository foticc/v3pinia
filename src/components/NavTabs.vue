<script setup>
import { Close } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";

const router = useRouter();
const route = useRoute();

const tabs = useStore();

let activeIndex = tabs.active;

const addTab = (targetName) => {};
const removeTab = (targetName) => {
  tabs.removeTabs(targetName);
};
const tabClick = (pane) => {
  router.push(pane.props.name);
};

const isActive = (item) => {
  return item.path == route.fullPath;
};

const activeStyle = (item) => {
  if (!isActive(item)) return {};
  return {
    "background-color": "#409eff",
    "border-color": "#409eff",
  };
};

const isAffix = (item) => {
  return item.path == null;
};

const closeSelectedTag = (item) => {
  removeTab(item.path);
  if (isActive(item)) {
    toLastTag(item.path);
  }
};

function toLastTag(path) {
  console.log("path", path);
  console.log("activeIndex", activeIndex);
  const latestView = tabs.topTabs.slice(-1)[0];
  if (latestView) {
    router.push(latestView.path);
  }
}
</script>

<template>
  <div id="tags-view-container" class="tags-view-container">
    <el-scrollbar :vertical="false" class="tags-view-wrapper">
      <router-link
        v-for="item in tabs.topTabs"
        :key="item.path"
        :data-path="item.path"
        :class="isActive(item) ? 'active' : ''"
        :to="{ path: item.path, query: item.query, fullPath: item.path }"
        class="tags-view-item"
        :style="activeStyle(item)"
        @click.middle="!isAffix(path) ? closeSelectedTag(item) : ''"
        @contextmenu.prevent="openMenu(path, $event)"
      >
        {{ item.title }}
        <span
          v-if="!isAffix(item)"
          @click.prevent.stop="closeSelectedTag(item)"
        >
          <close
            class="el-icon-close"
            style="width: 1em; height: 1em; vertical-align: middle"
          />
        </span>
      </router-link>
    </el-scrollbar>
  </div>
</template>

<style lang='scss' scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 2px 1px 3px 0 rgba(0, 0, 0, 0.12), 2px 0 3px 0 rgba(0, 0, 0, 0.04);
  text-align: left;
  border-width: 0px;
  .tags-view-wrapper {
    .tags-view-item {
      text-decoration: none;
      display: inline-block;
      position: relative;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      border: 1px solid #d8dce5;
      color: #495060;
      background: #fff;
      padding: 0 8px;
      font-size: 12px;
      margin-left: 5px;
      margin-top: 4px;
      &:first-of-type {
        margin-left: 15px;
      }
      &:last-of-type {
        margin-right: 15px;
      }
      &.active {
        background-color: #42b983;
        color: #fff;
        border-color: #42b983;
        &::before {
          content: "";
          background: #fff;
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          position: relative;
          margin-right: 2px;
        }
      }
    }
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    width: 100%;
    :deep(.el-scrollbar__bar) {
      bottom: 0px;
    }
    :deep(.el-scrollbar__wrap) {
      height: 49px;
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
</style>


<style lang="scss">
//reset element css of el-icon-close
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
        width: 12px !important;
        height: 12px !important;
      }
    }
  }
}
</style>