<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useStore } from "@/store";

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div>
    <div class="header-left">
      <img src="../../public/vite.svg" />
    </div>
    <el-scrollbar>
      <div>
        <el-menu
          active-text-color="#ffd04b"
          background-color="white"
          class="el-menu-vertical"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="home">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon>
              <document />
            </el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 1</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 2</span>
          </el-menu-item>
          <el-menu-item index="7">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 3</span>
          </el-menu-item>
          <el-menu-item index="8">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 4</span>
          </el-menu-item>
          <el-menu-item index="9">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 4</span>
          </el-menu-item>
          <el-menu-item index="10">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 4</span>
          </el-menu-item>
          <el-menu-item index="11">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 4</span>
          </el-menu-item>
          <el-menu-item index="12">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 4</span>
          </el-menu-item>

          <el-menu-item index="13">
            <el-icon>
              <setting />
            </el-icon>
            <span>Navigator 4</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.header-left {
  display: inherit;
  text-align: center;
  margin-top: 20px;
}
.el-menu-vertical {
  border-right: none;
  height: 90vh;
  width: auto;
  /* overflow-x: hidden; */
}
</style>