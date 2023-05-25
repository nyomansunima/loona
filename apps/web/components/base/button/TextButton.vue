<template>
  <button
    class="flex gap-3 justify-center items-center font-medium text-base"
    :type="props.type"
    :class="props.class"
    @click.prevent="emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
interface TextButtonProps {
  class?: string
  type?: 'button' | 'submit'
}
const props = withDefaults(defineProps<TextButtonProps>(), {
  type: 'button'
})

interface TextButtonEmits {
  (e: 'click'): void
}
const emit = defineEmits<TextButtonEmits>()
</script>
