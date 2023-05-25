<template>
  <div class="flex flex-col w-full">
    <label
      :for="`${name}-input`"
      v-show="label"
      class="flex font-medium text-sm text-gray-700 ml-2 mb-3"
      >{{ label }}</label
    >
    <div
      class="flex items-center px-5 h-[52px] rounded-[20px] bg-slate-50 ring-1 ring-slate-100 focus-within:ring-2 focus-within:ring-lavender transition-all duration-300"
    >
      <i class="text-lg" :class="preIcon" v-show="preIcon"></i>
      <input
        :id="`${name}-input`"
        :type="isShowPass ? 'text' : 'password'"
        class="flex h-full flex-1 bg-transparent text-black text-[15px] placeholder:text-[15px] placeholder:text-gray-500 outline-transparent border-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent"
        v-model="value"
        :placeholder="placeholder"
      />
      <button type="button" @click.prevent="togglePass">
        <i
          class="text-lg"
          :class="isShowPass ? 'fi fi-rr-eye-crossed' : 'fi fi-rr-eye'"
        ></i>
      </button>
    </div>
    <span v-show="errorMessage" class="flex text-sm text-red-500 ml-3 mt-4">{{
      errorMessage
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

interface PasswordInputProps {
  label?: string
  preIcon?: string
  name: string
  value?: any
  placeholder?: string
}

const props = withDefaults(defineProps<PasswordInputProps>(), {})
const { errorMessage, value, setValue } = useField(() => props.name)
if (props.value) {
  setValue(props.value)
}

const isShowPass = ref<boolean>(false)

const togglePass = () => {
  isShowPass.value = !isShowPass.value
}
</script>

<style scoped></style>
