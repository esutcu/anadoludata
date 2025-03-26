<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- Yukarı Çık Butonu -->
    <ScrollToTop />
    <!-- Teklif Modalı -->
    <TeklifModal v-model="teklifModalAcik" />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ScrollToTop from '~/components/ScrollToTop.vue'
import TeklifModal from '~/components/TeklifModal.vue'

const teklifModalAcik = ref(false)

// Lang attribute'u eklemek için useHead
useHead({
  htmlAttrs: {
    lang: 'tr'
  }
})

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
