// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    public:{
      apiSecret: process.env.X_RAPIDAPI_KEY,
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxthq/ui', '@vueuse/nuxt', '@pinia/nuxt', '@nuxt/image'],
 
})
