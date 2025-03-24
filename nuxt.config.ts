// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['~/assets/css/main.css'],
  
  // CSP ayarlarını düzeltme
  nitro: {
    prerender: {
      crawlLinks: true,
    },
    compressPublicAssets: true,
  },
  
  // Daha iyi SEO, güvenlik ve favicon
  app: {
    head: {
      title: 'AnadoluData - Teknoloji Çözümleri',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AnadoluData web, mobil, blockchain ve CRM çözümleri sunan teknoloji firması' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    }
  }
})