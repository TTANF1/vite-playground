<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="oioi" />
  <!-- <Index /> -->
  <!-- <div>123123</div> -->
  <!-- <router-view /> -->
  <el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
    </el-option>
  </el-select>

  <div class="box">{{ foo }}</div>
  <Box ref="boxRef" :id="88" name="6657"></Box>
</template>

<!-- <style src="./styles/index.css" /> -->
<script lang="ts" setup>
import { ref, unref, onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Box from './components/Box.vue';

// import Index from './components/index.vue';

const boxRef = ref(null);
onMounted(() => {
  console.log(
    '%c [ boxRef ]-25',
    'font-size:13px; background:pink; color:#bf2c9f;',
    (unref(boxRef) as any).$el
  );
});

const value = ref('');
const options = [
  {
    value: '选项1',
    label: '黄金糕',
  },
  {
    value: '选项2',
    label: '双皮奶',
  },
  {
    value: '选项3',
    label: '蚵仔煎',
  },
  {
    value: '选项4',
    label: '龙须面',
  },
  {
    value: '选项5',
    label: '北京烤鸭',
  },
];
const color = 'honeydew';
// ref: foo = 1

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background: v-bind(color);
}
</style>
