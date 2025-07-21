// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Make SCSS variables and mixins available globally
  css: ['~/styles/main.scss'],

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
