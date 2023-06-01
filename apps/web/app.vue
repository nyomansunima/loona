<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  titleTemplate: '%s | Loona',
})

useHead({
  bodyAttrs: {
    class:
      'text-base font-normal leading-normal text-black bg-white min-h-screen font-body',
  },
})

// register the plugins and animation
gsap.registerPlugin(ScrollTrigger)
</script>
