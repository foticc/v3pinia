<template>
  <div class="login-div">
    <el-form
      ref="ruleFormRef"
      :model="loginFrom"
      :rules="rules"
      label-width="auto"
      class="login-form"
      :size="formSize"
      label-position="left"
    >
      <el-form-item prop="username">
        <el-input
          v-model="loginFrom.username"
          placeholder="please input username"
          :prefix-icon="User"
        />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginFrom.password"
          placeholder="please input password"
          :prefix-icon="Lock"
          show-password
          clearable
        />
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          :loading="loading"
          size="large"
          type="primary"
          style="width: 100%"
          @click.prevent="handleLogin"
        >
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const loginFrom = reactive({
  username: "Hello",
  password: "World!",
});

const loading = ref(false);

const rules = reactive<FormRules>({});

const submitForm = async (formEl: FormInstance | undefined) => {};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));

const handleLogin = () => {};
</script>

<style  lang='scss' scoped>
.login-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-size: cover;
}
.login-form {
  border-radius: 6px;
  background: #ffffff;
  width: 300px;
  padding: 25px 25px 5px 25px;
  .el-input {
    height: 40px;
    input {
      height: 40px;
    }
  }
  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }
}
</style>
