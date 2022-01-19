<template>
  <div class="a">{{ user.name }}</div>
  <div>{{ user.age }}</div>
  <div>{{ user.money }}</div>
  <button @click="handleClick">add</button>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user'
const user = useUserStore()
console.log('%c [ user ]', 'font-size:13px; background:pink; color:#bf2c9f;', user)

function handleClick() {
  user.addMoney(500)
}
</script>

<style lang="scss" scoped>
@import '@/styles/var.scss';

.a {
  background: pink;
  height: $height;
}
</style>
