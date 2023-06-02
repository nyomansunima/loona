<template>
  <header
    class="flex fixed inset-x-0 top-0 bg-white border-b border-b-gray-100 px-16 py-3 gap-5"
  >
    <TextButton link="/app/event"
      ><i class="fi fi-rr-arrow-left"></i> Back</TextButton
    >

    <div class="flex flex-1"></div>

    <!-- action button -->
    <OutlineButton
      v-show="store.activeStep > 0"
      @click="store.backStep()"
      size="small"
      class="transition-all duration-300 hover:-translate-y-1"
      >Back</OutlineButton
    >
    <FlatButton
      @click="store.nextStep()"
      size="small"
      class="transition-all duration-300 hover:-translate-y-1"
      >{{
        store.activeStep == store.totalStep - 1 ? 'Save' : 'Next'
      }}</FlatButton
    >
  </header>
</template>

<script setup lang="ts">
const store = useNewEventStore()
</script>
