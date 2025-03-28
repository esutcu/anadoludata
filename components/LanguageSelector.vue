<!-- LanguageSelector.vue -->
<script setup>
import { useLanguage } from '~/composables/useLanguage'

const { language, setLanguage } = useLanguage()

// Debug için izleme ekleyin
watch(language, (newLang) => {
  console.log('Dil değişti:', newLang)
}, { immediate: true })

function changeLang(lang) {
  console.log('Dil değiştiriliyor:', lang)
  setLanguage(lang)
}
</script>

<template>
  <div class="flex space-x-2">
    <button 
      @click="changeLang('tr')" 
      class="p-1 rounded hover:bg-gray-200 transition-colors"
      :class="{'ring-2 ring-anadolu-teal': language === 'tr'}"
      aria-label="Türkçe"
    >
      <img src="/images/TR.svg" alt="Türkçe" class="w-6 h-4">
    </button>
    <button 
      @click="changeLang('en')" 
      class="p-1 rounded hover:bg-gray-200 transition-colors"
      :class="{'ring-2 ring-anadolu-teal': language === 'en'}"
      aria-label="English"
    >
      <img src="/images/EN.svg" alt="English" class="w-6 h-4">
    </button>
  </div>
</template>