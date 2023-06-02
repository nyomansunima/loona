<template>
  <button
    class="flex gap-3 justify-center items-center border border-gray-100 font-medium"
    :class="[$props.class, sizeClass]"
    :type="$props.type"
    @click="link ? navigateTo(link) : $emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import { BaseButtonEmits, BaseButtonProps } from '~/types/component'

interface FlatButtonProps extends BaseButtonProps {}
const { type = 'button', size = 'medium' } = defineProps<FlatButtonProps>()

interface FlatButtonEmits extends BaseButtonEmits {}
defineEmits<FlatButtonEmits>()

const sizeClass = computed(() => {
  switch (size) {
    case 'small':
      return 'h-10 rounded-xl px-4 text-sm'
    case 'medium':
      return 'h-[52px] rounded-3xl px-6'
    default:
      return 'h-14 rounded-3xl px-6'
  }
})
</script>

<style scoped></style>
