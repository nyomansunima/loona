<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s | Loona'
})

useHead({
  bodyAttrs: {
    class:
      'text-base font-normal leading-normal text-black bg-white min-h-screen font-body'
  }
})
</script>
