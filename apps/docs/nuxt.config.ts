// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/devtools', '@nuxt/content'],
  nitro: {
    preset: 'github-pages'
  },
  content: {
    contentDriven: true
  },
  devtools: {
    enable: true
  }
})
