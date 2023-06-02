export const useNewEventStore = defineStore('new-event', () => {
  const activeStep = ref<number>(0)
  const totalStep = 2

  const nextStep = () => {
    if (activeStep.value < totalStep - 1) {
      activeStep.value++
    }
  }

  const backStep = () => {
    if (activeStep.value > 0) {
      activeStep.value--
    }
  }

  return { activeStep, nextStep, backStep, totalStep }
})
