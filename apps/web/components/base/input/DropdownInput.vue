<template>
  <div class="flex flex-col w-full">
    <label
      v-show="label"
      :for="`${name}-input`"
      class="flex font-medium text-sm text-gray-700 ml-2 mb-3"
      >{{ label }}</label
    >
    <div
      class="flex items-center px-4 h-12 rounded-2xl ring-1 ring-slate-100 focus-within:ring-2 focus-within:ring-black transition-all duration-300 relative group"
    >
      <i v-show="preIcon" class="text-lg" :class="preIcon"></i>
      <input
        :name="name"
        :id="`${name}-input`"
        v-model="value"
        type="text"
        class="flex h-full flex-1 bg-transparent text-black text-[15px] placeholder:text-[15px] placeholder:text-gray-500 outline-transparent border-transparent ring-transparent focus:ring-transparent focus:border-transparent focus:outline-transparent"
        :placeholder="placeholder"
      />
      <i v-show="sufIcon" class="text-lg" :class="sufIcon"></i>

      <!-- dropdown menu -->
      <div
        class="hidden group-focus-within:flex flex-col absolute p-4 rounded-2xl border border-gray-100 bg-white left-0 right-10 top-14 shadow-sm"
      >
        <h5 class="text-xl font-medium">{{ dropdownLabel }}</h5>
        <ul
          class="flex flex-col gap-1 mt-2 border-t border-t-gray-100 pt-3 max-h-[200px] overflow-y-auto"
        >
          <li
            v-for="item in list"
            :key="item.value"
            class="px-3 py-2 rounded-xl transition-all duration-300 hover:bg-gray-100 cursor-pointer"
          >
            {{ item.label }}
          </li>
        </ul>
      </div>
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

interface DropdownInputProps extends BaseInputProps {
  dropdownLabel: string
  list?: { value: string; label: string }[]
}
const { modelValue, name, list = [] } = defineProps<DropdownInputProps>()
const { errorMessage, value, setValue } = useField(() => name)
if (modelValue) {
  setValue(modelValue)
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
