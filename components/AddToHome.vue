<template>
  <div v-if="showPrompt" class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-6 py-4 rounded-xl shadow-xl z-50 flex items-center gap-3 backdrop-blur-md">
    <div v-if="isIOS" class="flex items-center gap-2">
      <span class="text-sm">
        <TranslatedText 
          turkish="Safari'de 'Paylaş' butonuna tıklayıp 'Ana Ekrana Ekle'yi seçin" 
          english="Tap 'Share' button in Safari and choose 'Add to Home Screen'"
        />
      </span>
      <button @click="dismissPrompt" class="text-xs text-gray-500 ml-2">
        <TranslatedText turkish="Anladım" english="Got it" />
      </button>
    </div>
    <div v-else class="flex items-center gap-2">
      <span class="text-sm">
        <TranslatedText 
          turkish="Ana ekrana eklemek ister misiniz?" 
          english="Add to home screen?"
        />
      </span>
      <button @click="addToHome" class="bg-anadolu-teal text-white px-4 py-2 rounded hover:bg-anadolu-teal/90 text-sm">
        <TranslatedText turkish="Ekle" english="Add" />
      </button>
      <button @click="dismissPrompt" class="text-xs text-gray-500 ml-2">
        <TranslatedText turkish="Kapat" english="Close" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import TranslatedText from '@/components/TranslatedText.vue'

const { language } = useLanguage()
const showPrompt = ref(false)
const isIOS = ref(false)
let deferredPrompt = null

onMounted(() => {
  // iOS kontrolü
  isIOS.value = /iphone|ipad|ipod/.test(
    window.navigator.userAgent.toLowerCase()
  )
  
  // Android için
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferredPrompt = e
    showPrompt.value = true
  })

  // iOS için özel kontrol
  if (isIOS.value) {
    const isInStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
    
    if (!isInStandalone) {
      // Sadece Safari'de göster
      const isSafari = /safari/.test(window.navigator.userAgent.toLowerCase())
      if (isSafari) {
        setTimeout(() => {
          showPrompt.value = true
        }, 3000)
      }
    }
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
  // 24 saat boyunca gösterme
  localStorage.setItem('pwaPromptDismissed', Date.now().toString())
}

// localStorage kontrolü
if (localStorage.getItem('pwaPromptDismissed')) {
  const dismissedTime = parseInt(localStorage.getItem('pwaPromptDismissed'))
  const twentyFourHours = 24 * 60 * 60 * 1000
  if (Date.now() - dismissedTime > twentyFourHours) {
    localStorage.removeItem('pwaPromptDismissed')
  }
}
</script>

<style scoped>
.backdrop-blur-md {
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
}
</style>