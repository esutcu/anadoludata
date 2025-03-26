// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },
  
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
  
  // App başlığı, meta tag'leri ve diğer ayarlar
  app: {
    head: {
      title: 'AnadoluData - Teknoloji Çözümleri',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AnadoluData web, mobil, blockchain ve CRM çözümleri sunan teknoloji firması' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          'http-equiv': 'Content-Security-Policy',
          content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' http://66.179.240.190:3000 ws://localhost:4000"
        },
        {
          'http-equiv': 'X-Content-Type-Options',
          content: 'nosniff'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'tr'
      }
    }
  },
  
  // Nitro ayarları
  nitro: {
    prerender: {
      crawlLinks: true,
    },
    compressPublicAssets: true,
    
    // API proxy ayarları
    devProxy: {
      '/api': {
        target: 'http://66.179.240.190:3000',
        changeOrigin: true
      }
    }
  }
})