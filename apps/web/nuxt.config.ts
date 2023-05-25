// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/devtools',
    'nuxt-appwrite',
    '@nuxt/image-edge'
  ],
  css: ['~/assets/styles/globals.css'],
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
  nitro: {
    preset: 'vercel-edge'
  },
  devtools: {
    enabled: true
  },
  appwrite: {
    project: process.env.APPWRITE_PROJECT
  },
  runtimeConfig: {
    public: {
      host: ''
    }
  }
})
