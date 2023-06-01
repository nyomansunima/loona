export default defineEventHandler(async (event) => {
  const user = getCookie(event, 'user')
  if (user) {
    return JSON.stringify(user)
  }

  return null
})
