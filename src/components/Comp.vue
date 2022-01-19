<script setup lang="ts">
interface Props {
  count?: number;
}

const props = withDefaults(defineProps<Props>(), { count: 0 });

const addFn = (num: number) => {
  num++;
};
addFn(props.count);
</script>
