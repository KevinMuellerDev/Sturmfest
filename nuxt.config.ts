// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/robots',
    'nuxt-og-image',
    '@nuxt/image',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_KEY, apiOptions: { region: "eu" } }],
  ],

})