// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/devtools'],
  nitro: {
    preset: 'vercel-edge'
  },
  devtools: {
    enabled: true
  }
})
