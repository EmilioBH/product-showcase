export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  
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

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "~/assets/scss/utils/_config.scss" as *;
            @use "~/assets/scss/utils/_mixins.scss" as *;
          `
        }
      }
    }
  },
  
  typescript: {
    strict: true,
  },

  nitro: {
    compatibilityDate: '2025-07-21'
  },
})
