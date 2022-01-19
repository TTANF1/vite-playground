<template>
  <div id="box">
    <div>{{ x }}{{ y }}</div>
    <!-- <div>{{ event }}</div> -->
    <div>{{ id }} - {{ name }}</div>
    <button @click="handleClick">submit</button>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import { ref } from '@vue/reactivity';

interface EventType {
  id?: number;
  name?: string;
}
type paylodOption = { x: number; y: number };

withDefaults(defineProps<EventType>(), {
  id: 1,
  name: 'yoyo',
});

/* const props = defineProps({
  event: {
    type: Object as PropType<EventType>,
    default: () => ({}),
  },
}) */

const x = ref(0);
const y = ref(0);

const emits = defineEmits({
  click: null,
  change: (paylod: paylodOption) => {
    // ts 能在使用层就避免类型错误
    if (typeof paylod.x !== 'number') {
      console.warn('Invalid submit event payload!');
      return false;
    }
  },
});

function handleClick() {
  // emits('change', { x: '2', y: 2 })
  // emits('change', { x: 66, y: 57 });
  x.value++;
  y.value++;
  emits('click', 'sdaqwd1123', 123);
  return 'be clicked...';
}

defineExpose({
  x,
  y,
  handleClick,
});
</script>
