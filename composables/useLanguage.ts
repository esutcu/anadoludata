// composables/useLanguage.ts
import { ref } from 'vue'

// Kodu global state ile değiştirin (daha güvenilir olması için)
const language = ref('tr')

export const useLanguage = () => {
  const setLanguage = (lang: 'tr' | 'en') => {
    language.value = lang
    console.log('Dil değiştirildi:', language.value) // Debug için
  }
  
  return {
    language,
    setLanguage
  }
}