export default defineNuxtConfig({
  devtools: { enabled: true },
  
  css: ['~/assets/scss/main.scss'],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],

  googleFonts: {
    families: {
      Nunito: [400, 600, 800],
    }
  },
  
  typescript: {
    strict: true,
  },

  nitro: {
    compatibilityDate: '2025-07-21'
  },
})
