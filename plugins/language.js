// plugins/language.js
import { useLanguage } from '~/composables/useLanguage'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      language: useLanguage()
    }
  }
})