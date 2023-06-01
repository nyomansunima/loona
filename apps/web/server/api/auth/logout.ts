export default defineEventHandler(async (event) => {
  if (event.node.req.method == 'POST') {
    deleteCookie(event, 'user')

    return {}
  }
})
