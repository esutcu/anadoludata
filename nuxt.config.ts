// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'
import type { NuxtConfig } from 'nuxt/schema'

export default defineNuxtConfig({
 typescript: {
   strict: true,
   typeCheck: true
 },

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
       { 
         name: 'viewport',
         content: 'width=device-width, initial-scale=1, maximum-scale=5'
       },
       { 
         name: 'description',
         content: 'AnadoluData web, mobil, blockchain ve CRM çözümleri sunan teknoloji firması'
       },
       { name: 'format-detection', content: 'telephone=no' },
       { property: 'og:title', content: 'AnadoluData - Teknoloji Çözümleri' },
       { property: 'og:description', content: 'Web, mobil ve blockchain odaklı çözümler' },
       { property: 'og:image', content: '/icon-512.png' },
       { property: 'og:url', content: 'https://anadoludata.com' },
       { name: 'twitter:card', content: 'summary_large_image' },
       { name: 'apple-mobile-web-app-capable', content: 'yes' },
       { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
       { name: 'apple-mobile-web-app-title', content: 'AnadoluData' },
       { name: 'apple-touch-fullscreen', content: 'yes' },
       { name: 'application-name', content: 'AnadoluData' },
       { name: 'theme-color', content: '#0F666D' },
       { name: 'msapplication-TileColor', content: '#0F666D' },
       { name: 'msapplication-TileImage', content: '/icon-192.png' },
       { name: 'msapplication-config', content: '/browserconfig.xml' },
       { name: 'mobile-web-app-capable', content: 'yes' }
     ],
     link: [
       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
       { rel: 'shortcut icon', href: '/favicon.ico' },
       { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
       { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
       { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
       { 
         rel: 'apple-touch-startup-image',
         href: '/apple-splash-2048-2732.png',
         media: '(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)'
       },
       { rel: 'manifest', href: '/manifest.webmanifest' },
       { 
         rel: 'preload',
         as: 'image',
         href: '/images/herotech.webp',
         type: 'image/webp'
       }
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
      apiBase: '/api'  // process.env.API_BASE || '/api' yerine direkt /api
    }
  },

 nitro: {
  prerender: false,  // Prerender'ı kapatalım
  minify: true,
  compressPublicAssets: {
    brotli: true,
    gzip: true
  },
  routeRules: {
    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },
    '/images/**': {
      headers: {
        'Cache-Control': 'public, max-age=86400, must-revalidate'
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
        'Cross-Origin-Resource-Policy': 'same-origin',
        'Cache-Control': 'no-cache, must-revalidate'  // Cache'i değiştirdim
      }
    }
  }
},

 pwa: {
   registerType: 'autoUpdate',
   manifest: {
     name: 'AnadoluData',
     short_name: 'AnadoluData',
     theme_color: '#0F666D',
     background_color: '#0F666D',
     display: 'standalone',
     orientation: 'portrait',
     scope: '/',
     start_url: '/?source=pwa',
     icons: [
       {
         src: '/apple-touch-icon.png',
         sizes: '180x180',
         type: 'image/png',
         purpose: 'apple touch icon'
       },
       {
         src: '/icon-192.png',
         sizes: '192x192',
         type: 'image/png',
         purpose: 'any'
       },
       {
         src: '/icon-512.png',
         sizes: '512x512',
         type: 'image/png',
         purpose: 'any maskable'
       }
     ]
   },
   workbox: {
     navigateFallback: '/',
     globPatterns: ['**/*.{js,css,html,ico}'],
     runtimeCaching: [
       {
         urlPattern: /\.(png|jpg|jpeg|svg|webp)$/,
         handler: 'CacheFirst',
         options: {
           cacheName: 'image-cache'
         }
       },
       {
         urlPattern: /^https:\/\/anadoludata\.com\/.*/,
         handler: 'NetworkFirst',
         options: {
           cacheName: 'api-cache',
           networkTimeoutSeconds: 5
         }
       }
     ]
   }
 },

 image: {
   provider: 'static',
   format: ['webp'],
   quality: 85,
   screens: {
     xs: 320,
     sm: 640,
     md: 768,
     lg: 1024,
     xl: 1280,
   },
   preload: true,
   optimize: {
     webp: {
       preset: 'default',
       quality: 85,
     }
   }
 },

 compatibilityDate: '2025-03-28'
} as unknown as NuxtConfig)