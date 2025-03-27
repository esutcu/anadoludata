<template>
    <div v-if="showPrompt" class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-6 py-4 rounded-xl shadow-xl z-50 flex items-center gap-3 backdrop-blur-md">
      <span class="text-sm">Ana ekrana eklemek ister misiniz?</span>
      <button @click="addToHome" class="bg-anadolu-teal text-white px-4 py-2 rounded hover:bg-anadolu-teal/90 text-sm">Ekle</button>
      <button @click="dismissPrompt" class="text-xs text-gray-500 ml-2">Kapat</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const showPrompt = ref(false)
  let deferredPrompt = null
  
  onMounted(() => {
    // Android için: beforeinstallprompt
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      deferredPrompt = e
      showPrompt.value = true
    })
  
    // iOS için: Safari'de PWA önerisi görünmez, kendimiz gösterelim
    const isIOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
    const isInStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
    if (isIOS && !isInStandalone) {
      setTimeout(() => {
        showPrompt.value = true
      }, 3000)
    }
  })
  
  const addToHome = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        showPrompt.value = false
        deferredPrompt = null
      }
    }
  }
  
  const dismissPrompt = () => {
    showPrompt.value = false
  }
  </script>
  
  <style scoped>
  @media (min-width: 640px) {
    div {
      font-size: 14px;
    }
  }
  </style>
  