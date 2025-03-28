// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import type { NuxtConfig } from 'nuxt/schema'

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@nuxt/image',
    'nuxt-schema-org'
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
        { property: 'og:title', content: 'AnadoluData - Teknoloji Çözümleri' },
        { property: 'og:description', content: 'Web, mobil ve blockchain odaklı çözümler' },
        { property: 'og:image', content: '/icon-512.png' },
        { property: 'og:url', content: 'https://anadoludata.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'AnadoluData' },
        { name: 'application-name', content: 'AnadoluData' },
        { name: 'theme-color', content: '#0F666D' },
        { name: 'msapplication-TileColor', content: '#0F666D' },
        { name: 'msapplication-TileImage', content: '/favicon.ico' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: 'AnadoluData' },
        { name: 'application-name', content: 'AnadoluData' },
        { name: 'theme-color', content: '#0F666D' },
        { name: 'msapplication-TileColor', content: '#0F666D' },
        { name: 'msapplication-TileImage', content: '/favicon.ico' },
        { name: 'msapplication-config', content: '/browserconfig.xml' }

      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'preload', as: 'image', href: '/images/herotech.webp' }
        
      ],
      htmlAttrs: {
        lang: 'tr'
      },
      // Schema.org yapılandırmaları eklendi
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AnadoluData",
            "url": "https://anadoludata.com",
            "logo": "https://anadoludata.com/images/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "bilgi@anadoludata.com",
              "contactType": "customer service",
              "availableLanguage": ["Turkish", "English"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressRegion": "İstanbul",
              "addressCountry": "TR"
            },
            "sameAs": [
              "https://instagram.com/anadoludata",
              "https://twitter.com/anadoludata",
              "https://github.com/anadoludata"
            ]
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "AnadoluData - Teknoloji Çözümleri",
            "url": "https://anadoludata.com",
            "description": "AnadoluData web, mobil, blockchain ve CRM çözümleri sunan teknoloji firması",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://anadoludata.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AnadoluData",
            "image": "https://anadoludata.com/images/herotech.webp",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "İstanbul",
              "addressRegion": "İstanbul",
              "addressCountry": "TR"
            },
            "email": "bilgi@anadoludata.com",
            "priceRange": "$$",
            "description": "AnadoluData web, mobil, blockchain ve CRM çözümleri sunan teknoloji firması"
          })
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Geliştirme",
              "provider": {
                "@type": "Organization",
                "name": "AnadoluData"
              },
              "description": "Modern ve hızlı web uygulamaları, e-ticaret sistemleri ve kurumsal web siteleri geliştiriyoruz.",
              "areaServed": {
                "@type": "Country",
                "name": "Türkiye"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Mobil Uygulama Geliştirme",
              "provider": {
                "@type": "Organization",
                "name": "AnadoluData"
              },
              "description": "iOS ve Android için native performansta, kullanıcı dostu mobil uygulamalar tasarlıyoruz.",
              "areaServed": {
                "@type": "Country",
                "name": "Türkiye"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Blockchain Teknolojileri",
              "provider": {
                "@type": "Organization",
                "name": "AnadoluData"
              },
              "description": "Güvenli ve şeffaf blockchain tabanlı çözümlerle işletmenizi geleceğe hazırlıyoruz.",
              "areaServed": {
                "@type": "Country",
                "name": "Türkiye"
              }
            }
          ])
        }
      ]
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


    routeRules: {
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=86400'
        }
      },
      '/manifest.webmanifest': {
        headers: {
          'Cache-Control': 'public, max-age=604800'
        }
      },
      '/favicon.ico': {
        headers: {
          'Cache-Control': 'public, max-age=604800'
        }
      },
      '/fonts/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**': {
        headers: {
          'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self' https://anadoludata.com;",
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
  },

  // PWA yapılandırması
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'AnadoluData',
      short_name: 'AnadoluData',
      theme_color: '#0F666D',
      background_color: '#0F666D',
      icons: [
        {
          src: '/icon-192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icon-512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      // Geliştirilmiş offline deneyimi için cache stratejileri
      navigateFallback: '/',
      runtimeCaching: [
        // HTML ve API istekleri için NetworkFirst
        {
          urlPattern: /^https:\/\/anadoludata\.com\/.*$/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'site-cache',
            networkTimeoutSeconds: 10
          }
        },
        // Resimler için CacheFirst (önce önbellekten yükle)
        {
          urlPattern: /\.(png|jpg|jpeg|svg|webp)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'image-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24 * 60 * 60 // 30 gün
            }
          }
        },
        // CSS, JS ve font dosyaları için StaleWhileRevalidate
        {
          urlPattern: /\.(css|js|woff2|ttf|woff)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'assets-cache'
          }
        }
      ]
    }
  },

  image: {
    provider: 'static',
    format: ['webp', 'avif', 'png', 'jpg'],
    quality: 80
  }
} as unknown as NuxtConfig)