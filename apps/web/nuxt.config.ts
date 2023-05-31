// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/devtools', '@nuxt/image-edge'],
  css: [
    '~/assets/styles/globals.css',
    '@flaticon/flaticon-uicons/css/all/all.css'
  ],
  imports: {
    dirs: ['composables/**']
  },
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false
      }
    ]
  },
  devtools: {
    enabled: true
  },
  runtimeConfig: {
    public: {
      host: '',
      appwrite: {
        project: process.env.APPWRITE_PROJECT,
        apiKey: process.env.APPWRITE_API_KEY
      }
    }
  }
})
