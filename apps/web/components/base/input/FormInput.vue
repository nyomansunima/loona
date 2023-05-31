<template>
  <form
    method="post"
    class="flex flex-col w-full"
    :class="props.class"
    @submit.prevent="onSubmit"
  >
    <slot />
  </form>
</template>

<script setup lang="ts">
import { FormContext } from 'vee-validate'

interface FormProps {
  class?: string
  context: FormContext
}

const props = defineProps<FormProps>()

interface FormEmit {
  (e: 'save', data: any): void
}
const emit = defineEmits<FormEmit>()
const onSubmit = props.context.handleSubmit((data) => {
  emit('save', data)
})
</script>

<style scoped></style>
