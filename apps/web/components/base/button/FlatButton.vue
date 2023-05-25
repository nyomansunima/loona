<template>
  <button
    class="flex justify-center items-center h-[52px] bg-lavender rounded-3xl font-medium text-base px-6"
    :class="props.class"
    :type="props.type"
    @click="emit('click')"
    :disabled="disabled"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
interface FlatButtonProps {
  class?: string
  type?: 'button' | 'submit'
  disabled?: boolean
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
