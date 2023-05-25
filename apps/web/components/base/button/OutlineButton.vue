<template>
  <button
    class="flex gap-3 justify-center items-center h-[52px] border border-gray-100 rounded-3xl font-medium text-base px-6"
    :class="props.class"
    :type="props.type"
    @click="emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
interface FlatButtonProps {
  class?: string
  type?: 'button' | 'submit'
}
const props = withDefaults(defineProps<FlatButtonProps>(), {
  type: 'button'
})

interface FlatButtonEmits {
  (e: 'click'): void
}
const emit = defineEmits<FlatButtonEmits>()
</script>

<style scoped></style>
