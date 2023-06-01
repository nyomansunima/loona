<template>
  <main>
    <!-- not found error -->
    <section
      class="flex container mx-auto px-20 h-screen w-screen items-center gap-20"
      v-if="error?.statusCode == 404"
    >
      <div class="w-5/12 left">
        <NuxtImg src="/images/illustrations/touch.png" />
      </div>
      <div class="flex flex-col w-1/2 right">
        <h2
          class="text-6xl font-medium font-heading mt-10 leading-tight w-10/12"
        >
          Opps, sorry we lost <span class="text-gray-500">this page</span>
        </h2>

        <div class="flex mt-16">
          <FlatButton
            link="/"
            class="transition-all duration-500 hover:scale-95"
          >
            <i class="fi fi-rr-paper-plane"></i>
            Back Home</FlatButton
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { error } = defineProps({
  error: Object
})

useSeoMeta({
  title:
    error?.statusCode === 404 ? 'Not Found | Loona' : 'Server Error | Loona'
})

useHead({
  bodyAttrs: {
    class:
      'text-base font-normal leading-normal text-black bg-white min-h-screen font-body'
  }
})

onMounted(() => {
  // animate the ui
  gsap.from('.left', {
    y: 200,
    opacity: 0,
    duration: 1.2,
    ease: 'back'
  })
  gsap.from('.right', {
    y: 200,
    opacity: 0,
    duration: 1.2
  })
})
</script>
