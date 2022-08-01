<script setup>
import { ref, watch, reactive } from "vue";
import { useStore } from "../store/shop";

defineProps({
  msg: String,
});

const count = ref(0);
const user = reactive({
  name: "123",
  hello: "hi",
});
const s = useStore();
watch(count, (ov, nv) => {
  s.increment();
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ user.name }}</h1>

  <div class="card">
    {{ s.double }}
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
