<script setup>
import { UserFilled } from "@element-plus/icons-vue";
</script>

<template>
  <div class="header-layout">
    <div class="header-right">
      <el-dropdown class="icon" trigger="click">
        <el-avatar :icon="UserFilled">
          <arrow-down />
        </el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 50px;
  margin-right: 20px;
}

.header-layout {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header-right {
  flex: 1;
  text-align: right;
  margin-top: 10px;
  margin-left: 120px;
}

.icon:hover {
  cursor: pointer;
}
</style>