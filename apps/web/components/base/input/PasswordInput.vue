<template>
  <div class="flex flex-col w-full">
    <label
      v-show="label"
      :for="`${name}-input`"
      class="flex font-medium text-sm text-gray-700 ml-2 mb-3"
      >{{ label }}</label
    >
    <div
      class="flex items-center px-5 h-[52px] rounded-[20px] ring-1 ring-slate-100 focus-within:ring-2 focus-within:ring-black transition-all duration-300"
    >
      <i v-show="preIcon" class="text-lg" :class="preIcon"></i>
      <input
        :name="name"
        :id="`${name}-input`"
        v-model="value"
        :type="isShowPass ? 'text' : 'password'"
        class="flex h-full flex-1 bg-transparent text-black text-[15px] placeholder:text-[15px] placeholder:text-gray-500 outline-transparent border-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent"
        :placeholder="placeholder"
      />
      <button type="button" @click.prevent="togglePass">
        <i
          class="text-lg"
          :class="isShowPass ? 'fi fi-rr-eye-crossed' : 'fi fi-rr-eye'"
        ></i>
      </button>
    </div>
    <Transition name="slide-fade">
      <span v-show="errorMessage" class="flex text-sm text-red-500 ml-3 mt-4">{{
        errorMessage
      }}</span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { BaseInputProps } from '~/types/component'

interface PasswordInputProps extends BaseInputProps {}

const { modelValue, name } = defineProps<PasswordInputProps>()
const { errorMessage, value, setValue } = useField(() => name)
if (modelValue) {
  setValue(modelValue)
}

const isShowPass = ref<boolean>(false)

const togglePass = () => {
  isShowPass.value = !isShowPass.value
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
