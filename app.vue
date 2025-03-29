<!-- app.vue -->
<template>
  <NuxtLayout>
    <!-- Ana içerik - En yüksek öncelik -->
    <NuxtPage />

    <!-- Lazy loading ile gecikmeli yüklenen bileşenler -->
    <LazyTeklifModal 
      v-if="teklifModalAcik" 
      v-model="teklifModalAcik" 
      lazy 
    />

    <!-- Client-side only ve lazy loading -->
    <ClientOnly>
      <!-- Scroll butonu viewport'a girince yüklensin -->
      <LazyScrollToTop />
      
      <!-- PWA prompt gecikmeli yüklensin -->
      <Suspense>
        <LazyAddToHome />
      </Suspense>
    </ClientOnly>
  </NuxtLayout>
</template>

<script setup>
// Dynamic imports
const ScrollToTop = defineAsyncComponent(() => 
  import('~/components/ScrollToTop.vue')
)
const TeklifModal = defineAsyncComponent(() => 
  import('~/components/TeklifModal.vue')
)
const AddToHome = defineAsyncComponent(() => 
  import('@/components/AddToHome.vue')
)

import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// State
const teklifModalAcik = ref(false)

// SEO
useHead({
  htmlAttrs: {
    lang: 'tr'
  }
})

// Route handling
onMounted(() => {
  const router = useRouter()
  router.afterEach(() => {
    // Performans için requestAnimationFrame kullan
    requestAnimationFrame(() => {
      window.scrollTo({ 
        top: 0, 
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      })
    })
  })
})
</script>

<style>
html {
  scroll-behavior: smooth;
  /* Performans için */
  content-visibility: auto;
  contain: paint;
}

/* Performans için animasyon optimizasyonu */
.v-enter-active,
.v-leave-active {
  will-change: opacity;
  transform: translateZ(0);
}
</style>