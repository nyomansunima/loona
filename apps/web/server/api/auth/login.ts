export default defineEventHandler(async (event) => {
  // start to authenticate the user that works in client side and server
  // side. This utility will be using appwrite as main feature
  if (event.node.req.method == 'POST') {
    const body = await readBody(event)
    setCookie(event, 'user', body)
    return {}
  } else {
    return createError({
      status: 403,
      message: 'auth/user-not-found'
    })
  }
})
