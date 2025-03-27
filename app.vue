<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />

    <!-- Yukarı Çık Butonu sadece client tarafında yüklensin -->
    <ClientOnly>
      <ScrollToTop />
    </ClientOnly>

    <!-- Teklif Modalı sadece açıldığında DOM'a girsin -->
    <TeklifModal v-if="teklifModalAcik" v-model="teklifModalAcik" />

    <AddToHome />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ScrollToTop from '~/components/ScrollToTop.vue'
import TeklifModal from '~/components/TeklifModal.vue'
import AddToHome from '@/components/AddToHome.vue'

// Teklif modal durumunu kontrol etmek için
const teklifModalAcik = ref(false)

// <html lang="tr"> ayarı
useHead({
  htmlAttrs: {
    lang: 'tr'
  }
})

// Sayfa değişince otomatik yukarı kaydır
onMounted(() => {
  const router = useRouter()
  router.afterEach(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
