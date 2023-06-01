export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = await useFetch<any>('/api/auth')
  if (data.value && to.path.includes('/signin')) {
    return navigateTo('/')
  }
  return
})
