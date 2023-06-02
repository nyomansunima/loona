<template>
  <div>
    <!-- new event header -->
    <NewEventHeader />

    <!-- all contents -->
    <main class="container mx-auto py-32">
      <div class="w-6/12 mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>
