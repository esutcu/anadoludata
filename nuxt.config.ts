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

  app: {
    head: {
      title: 'AnadoluData - Teknoloji Çözümleri',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AnadoluData web, mobil, blockchain ve CRM çözümleri sunan teknoloji firması' },
        { name: 'format-detection', content: 'telephone=no' },

        // 🔗 Sosyal medya (OG + Twitter)
        { property: 'og:title', content: 'AnadoluData - Teknoloji Çözümleri' },
        { property: 'og:description', content: 'Web, mobil ve blockchain odaklı çözümler' },
        { property: 'og:image', content: '/icon-512.png' },
        { property: 'og:url', content: 'https://anadoludata.com' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ],
      htmlAttrs: {
        lang: 'tr'
      }
    }
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || '/api'
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true
    },
    compressPublicAssets: true,

    devProxy: {
      '/api': {
        target: 'http://66.179.240.190:3000',
        changeOrigin: true
      }
    },

    routeRules: {
      '/**': {
        headers: {
          // 🔐 CSP: script/style inline için izin verildi (geçici)
          'Content-Security-Policy':
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' http://66.179.240.190:3000",

          // 🧱 Güvenlik başlıkları
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
          'Cross-Origin-Embedder-Policy': 'require-corp',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Cross-Origin-Resource-Policy': 'same-origin'
        }
      }
    }
  }
})
