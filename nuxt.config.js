export default defineNuxtConfig({
  modules: [
      "@nuxtjs/tailwindcss",
      '@primevue/nuxt-module'
  ],

  primevue: {
      /* Configuration */
      options: {
          ripple: true,
          inputVariant: 'filled',
          importTheme: { from: '@/themes/site-theme.js' },
      },
      usePrimeVue: true
  },

  compatibilityDate: '2024-10-21'
})