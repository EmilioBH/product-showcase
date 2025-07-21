// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Make SCSS variables and mixins available globally
  css: ['~/styles/main.scss'],

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],

  googleFonts: {
    families: {
      Nunito: [400, 600, 800],
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/styles/_variables.scss"; @import "~/styles/_mixins.scss";'
        }
      }
    }
  },
  
  typescript: {
    strict: true,
  }
})
