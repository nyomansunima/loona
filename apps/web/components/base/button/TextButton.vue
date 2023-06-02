<template>
  <button
    class="flex gap-3 justify-center items-center font-medium text-base"
    :type="$props.type"
    :class="$props.class"
    @click="link ? navigateTo(link) : $emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import { BaseButtonEmits, BaseButtonProps } from '~/types/component'

interface TextButtonProps extends BaseButtonProps {}
const { type = 'button' } = defineProps<TextButtonProps>()

interface TextButtonEmits extends BaseButtonEmits {}
defineEmits<TextButtonEmits>()
</script>

<style scoped>
:slotted(i) {
  @apply text-xl;
}
</style>
