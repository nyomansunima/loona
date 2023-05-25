<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class:
      'text-base font-normal leading-normal text-black bg-white min-h-screen font-body'
  }
})
</script>
