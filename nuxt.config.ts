// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Modul tambahan
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // File CSS utama/global
  css: [
    '~/assets/css/main.css'
  ],

  // Transpile GSAP agar tidak error saat SSR/Build
  build: {
    transpile: ['gsap']
  }
})