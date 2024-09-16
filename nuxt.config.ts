// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  builder: 'webpack',
  ssr: false // ssr has problem also in webpack mode, need to fix webpack ssr first
})
