<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "@/components/HelloWorld.vue";
import Menu from "@/components/Menu.vue";
import NavTabs from "@/components/NavTabs.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Menu />
      </el-aside>
      <el-container>
        <el-header class="header">
          <Header />
        </el-header>
        <el-main class="main">
          <nav-tabs />
          <router-view replace />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background: transparent;
  margin: 1px;
}

.aside {
  background-color: #545c64;
  text-align: left;
  min-width: 200px;
  width: 210px;
  box-shadow: 1px 1px 1px #545c61;
}

.main {
  padding: 0;
}

.common-layout {
  flex: 1;
  display: flex;
  /* height: 100vh; */
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
