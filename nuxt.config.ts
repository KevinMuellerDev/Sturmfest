// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:true,
  modules: ['@nuxtjs/robots', 'nuxt-og-image'],
  site: { 
    url: 'https://example.com', 
    name: 'My Awesome Website' 
    }, 
})