<template>
  <div>
    <!-- adding the detail event -->
    <Transition>
      <div class="flex flex-col" v-show="store.activeStep == 0">
        <h2 class="text-5xl font-medium leading-tight w-8/12">
          Tell use about your event
        </h2>

        <div class="flex flex-col gap-5 mt-16">
          <TextInput
            name="name"
            label="Event Name"
            placeholder="Your event name"
          />
          <URLMatchingInput
            name="url"
            label="Event URL"
            placeholder="Your event url"
          />
          <DropdownInput
            name="category"
            label="Category"
            placeholder="Pick your own event purpose"
            dropdown-label="Categories"
          />
          <TextAreaInput
            name="desc"
            label="Description"
            placeholder="Describe about your event"
          />
        </div>
      </div>
    </Transition>

    <!-- location and period -->
    <Transition>
      <div class="flex flex-col" v-show="store.activeStep == 1">
        <h2 class="text-5xl font-medium leading-tight w-10/12">
          Tell your event location and period
        </h2>

        <div class="flex flex-col gap-5 mt-16">
          <TextInput
            name="location"
            label="Location"
            placeholder="Your event location"
          />
          <DateInput
            name="date"
            label="Event Date"
            placeholder="Your event date"
          />
          <DropdownInput
            name="period"
            label="Period"
            dropdown-label="Periods"
            placeholder="How long your event will be"
            suf-icon="fi fi-rr-angle-small-down"
            :list="periodList"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'new-event',
  middleware: ['auth'],
})
useSeoMeta({
  title: 'Create Event',
  description: 'Create your awesome event with awesome people',
})

const store = useNewEventStore()
const periodList = [
  {
    label: 'One Day',
    value: 'one day',
  },
  {
    label: 'Less than a week',
    value: '< week',
  },
]
</script>
