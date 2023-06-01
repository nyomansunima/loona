<template>
  <button
    class="flex gap-3 justify-center items-center h-[52px] bg-lavender rounded-3xl font-medium text-base px-6 disabled:bg-opacity-70 relative"
    :class="$props.class"
    :type="$props.type"
    :disabled="disabled"
    @click="link ? navigateTo(link) : $emit('click')"
  >
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import { BaseButtonProps, BaseButtonEmits } from '~/types/component'

interface FlatButtonProps extends BaseButtonProps {}
const { type = 'button' } = defineProps<FlatButtonProps>()

interface FlatButtonEmits extends BaseButtonEmits {}
defineEmits<FlatButtonEmits>()
</script>
