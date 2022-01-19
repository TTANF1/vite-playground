<template>
  <div @click="handleClick">1</div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
// import { reactive, ref, watchEffect } from '@vue/composition-api'
const count = ref(1)
const flag = false
let obj = reactive({})
obj = { a: 1 }
console.log('%c [ obj ]', 'font-size:13px; background:pink; color:#bf2c9f;', obj)

watchEffect(() => {
  if (flag) {
    console.log(count.value)
  } else {
    console.log('false...')
  }
})

function handleClick() {
  count.value++
}
</script>
