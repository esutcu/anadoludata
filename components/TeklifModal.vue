<!-- components/TeklifModal.vue -->
<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-anadolu-navy">
            <TranslatedText turkish="Teklif Alın" english="Get a Quote" />
          </h2>
          <button @click="$emit('update:modelValue', false)" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="gonderTeklif" class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium">
              <TranslatedText turkish="Adınız Soyadınız" english="Your Full Name" /> <span class="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              class="w-full p-2 border rounded" 
              v-model="formData.adSoyad"
              maxlength="100"
              required 
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">
              <TranslatedText turkish="E-posta" english="Email" /> <span class="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              class="w-full p-2 border rounded" 
              v-model="formData.email"
              maxlength="100"
              required 
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">
              <TranslatedText turkish="Telefon" english="Phone" /> <span class="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              class="w-full p-2 border rounded" 
              v-model="formData.telefon"
              maxlength="20"
              required 
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">
              <TranslatedText turkish="Web Siteniz" english="Your Website" /> <span class="text-gray-400">
                <TranslatedText turkish="(Varsa)" english="(If any)" />
              </span>
            </label>
            <input 
              type="url" 
              class="w-full p-2 border rounded" 
              v-model="formData.website"
              maxlength="150"
              placeholder="https://example.com"
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">
              <TranslatedText turkish="Proje Türü" english="Project Type" /> <span class="text-red-500">*</span>
            </label>
            <select class="w-full p-2 border rounded" v-model="formData.projeTuru" required>
              <option value="">
                <TranslatedText turkish="Seçiniz" english="Choose" />
              </option>
              <option value="web">
                <TranslatedText turkish="Web Sitesi/Uygulaması" english="Website/Web Application" />
              </option>
              <option value="mobil">
                <TranslatedText turkish="Mobil Uygulama" english="Mobile Application" />
              </option>
              <option value="pwa">Progressive Web App
              </option>
              <option value="blockchain">
                <TranslatedText turkish="Blockchain Projesi" english="Blockchain Project" />
              </option>
              <option value="crm">
                <TranslatedText turkish="CRM Çözümü" english="CRM Solution" />
              </option>
              <option value="diger">
                <TranslatedText turkish="Diğer" english="Other" />
              </option>
            </select>
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">
              <TranslatedText turkish="Proje Detayları" english="Project Details" /> <span class="text-red-500">*</span>
            </label>
            <textarea 
              rows="4" 
              class="w-full p-2 border rounded"
              v-model="formData.detaylar"
              maxlength="500"
              required
            ></textarea>
            <div class="text-xs text-gray-500 flex justify-between">
              <span>
                <TranslatedText turkish="Kalan karakter:" english="Characters left:" /> {{ 500 - formData.detaylar.length }}
              </span>
              <span>
                <TranslatedText turkish="Maksimum 500 karakter" english="Maximum 500 characters" />
              </span>
            </div>
          </div>
          
          <Button 
            class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90 text-white"
            type="submit" 
            :disabled="gonderiliyor"
          >
            <span v-if="gonderiliyor">
              <TranslatedText turkish="Gönderiliyor..." english="Sending..." />
            </span>
            <span v-else>
              <TranslatedText turkish="Teklif İsteği Gönder" english="Send Quote Request" />
            </span>
          </Button>
          
          <!-- Form gönderim durumu -->
          <div v-if="formDurumu" class="mt-4 p-3 rounded" :class="formDurumu.basarili ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            <TranslatedText 
              :turkish="formDurumu.mesajTR" 
              :english="formDurumu.mesajEN" 
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRuntimeConfig } from '#app';
import { Button } from '@/components/ui/button';
import TranslatedText from '@/components/TranslatedText.vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const formData = ref({
  adSoyad: '',
  email: '',
  telefon: '',
  website: '',
  projeTuru: '',
  detaylar: ''
});

const gonderiliyor = ref(false);
const formDurumu = ref(null);

const gonderTeklif = async () => {
  gonderiliyor.value = true;
  
  try {
    const { apiBase } = useRuntimeConfig().public;
    
    // Sunucuya gönder - doğru apiBase kullanarak
    const response = await fetch(`${apiBase}/teklif`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    });
    
    if (!response.ok) {
      throw new Error('Sunucu hatası');
    }
    
    // İşlem başarılı
    formDurumu.value = {
      basarili: true,
      mesajTR: 'Teklif isteğiniz alınmıştır. 24 saat içinde size dönüş yapacağız.',
      mesajEN: 'Your quote request has been received. We will get back to you within 24 hours.'
    };
    
    // 3 saniye sonra modalı kapat
    setTimeout(() => {
      emit('update:modelValue', false);
      formData.value = {
        adSoyad: '',
        email: '',
        telefon: '',
        website: '',
        projeTuru: '',
        detaylar: ''
      };
      formDurumu.value = null;
    }, 3000);
    
  } catch (error) {
    // Hata durumu
    formDurumu.value = {
      basarili: false,
      mesajTR: 'Teklif isteği gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      mesajEN: 'An error occurred while sending your quote request. Please try again later.'
    };
    console.error('Form gönderim hatası:', error);
  } finally {
    gonderiliyor.value = false;
  }
};
</script>