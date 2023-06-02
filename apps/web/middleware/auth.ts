export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = await useFetch<any>('/api/auth')
  if (
    data.value &&
    (to.path.includes('/signin') || to.path.includes('forgot-password'))
  ) {
    return navigateTo('/')
  } else if (!data.value && !to.path.includes('/signin')) {
    return navigateTo('/signin')
  } else {
    return
  }
})
