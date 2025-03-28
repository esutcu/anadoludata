<!-- components/TeklifModal.vue -->
<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="absolute inset-0 bg-black bg-opacity-40" @click="$emit('update:modelValue', false)"></div>
        <div class="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
          <button 
            @click="$emit('update:modelValue', false)" 
            class="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 class="text-2xl font-bold mb-4 text-anadolu-teal">
            <TranslatedText turkish="Teklif Formu" english="Req a Quo" />
          </h2>
          
          <form class="space-y-4" @submit.prevent="gonderTeklifFormu">
  <div class="space-y-2">
    <label for="adsoyad-input" class="text-sm font-medium">
      <TranslatedText turkish="Ad Soyad" english="Name" /> <span class="text-red-500">*</span>
    </label>
    <input 
      id="adsoyad-input"
      type="text" 
      class="w-full p-2 border rounded" 
      v-model="formData.adSoyad"
      maxlength="100"
      :placeholder="language === 'tr' ? 'Ad ve soyadınız' : 'Your full name'"
      required 
    />
  </div>
  
  <div class="space-y-2">
    <label for="teklif-email-input" class="text-sm font-medium">
      <TranslatedText turkish="E-posta" english="Email" /> <span class="text-red-500">*</span>
    </label>
    <input 
      id="teklif-email-input"
      type="email" 
      class="w-full p-2 border rounded" 
      v-model="formData.email"
      maxlength="100"
      :placeholder="language === 'tr' ? 'E-posta adresiniz' : 'Your email address'"
      required 
    />
  </div>
  
  <div class="space-y-2">
    <label for="teklif-telefon-input" class="text-sm font-medium">
      <TranslatedText turkish="Telefon" english="Phone" /> <span class="text-red-500">*</span>
    </label>
    <input 
      id="teklif-telefon-input"
      type="tel" 
      class="w-full p-2 border rounded" 
      v-model="formData.telefon"
      maxlength="20"
      :placeholder="language === 'tr' ? 'Telefon numaranız' : 'Your phone number'"
      required 
    />
  </div>
  
  <div class="space-y-2">
    <label for="website-input" class="text-sm font-medium">
      <TranslatedText turkish="Web Sitesi" english="Website" />
    </label>
    <input 
      id="website-input"
      type="url" 
      class="w-full p-2 border rounded" 
      v-model="formData.website"
      maxlength="100"
      :placeholder="language === 'tr' ? 'Varsa web siteniz' : 'Your website, if any'"
    />
  </div>
  
  <div class="space-y-2">
    <label for="projeturu-input" class="text-sm font-medium">
      <TranslatedText turkish="Proje Türü" english="Type" /> <span class="text-red-500">*</span>
    </label>
    <select 
      id="projeturu-input"
      class="w-full p-2 border rounded" 
      v-model="formData.projeTuru"
      required
    >
      <option value="">{{ language === 'tr' ? 'Seçiniz' : 'Select' }}</option>
      <option value="Web Geliştirme">{{ language === 'tr' ? 'Web Geliştirme' : 'Web Development' }}</option>
      <option value="Mobil Uygulama">{{ language === 'tr' ? 'Mobil Uygulama' : 'Mobile Application' }}</option>
      <option value="E-Ticaret">{{ language === 'tr' ? 'E-Ticaret' : 'E-Commerce' }}</option>
      <option value="Blockchain">Blockchain</option>
      <option value="Diğer">{{ language === 'tr' ? 'Diğer' : 'Other' }}</option>
    </select>
  </div>
  
  <div class="space-y-2">
    <label for="detaylar-input" class="text-sm font-medium">
      <TranslatedText turkish="Proje Detayları" english="Project Details" /> <span class="text-red-500">*</span>
    </label>
    <textarea 
      id="detaylar-input"
      rows="4" 
      class="w-full p-2 border rounded"
      v-model="formData.detaylar"
      maxlength="500"
      :placeholder="language === 'tr' ? 'Projeniz hakkında detaylı bilgi...' : 'Detailed information about your project...'"
      required
    ></textarea>
    <div class="text-xs text-gray-500 flex justify-between">
      <span>
        <TranslatedText turkish="Kalan karakter:" english="Left:" /> {{ 500 - formData.detaylar.length }}
      </span>
      <span>
        <TranslatedText turkish="Maksimum 500 karakter" english="Max. 500" />
      </span>
    </div>
  </div>
  
  <Button 
    class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90 text-white"
    type="submit" 
    :disabled="formGonderiliyor"
  >
    <TranslatedText 
      turkish="Teklif Al" 
      english="Get Quo." 
      v-if="!formGonderiliyor"
    />
    <TranslatedText 
      turkish="Gönderiliyor..." 
      english="Sending..." 
      v-else
    />
  </Button>

  <!-- Form gönderim durumu -->
  <div v-if="formDurumu" class="mt-4 p-3 rounded" :class="formDurumu.basarili ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
    <TranslatedText :turkish="formDurumu.mesajTR" :english="formDurumu.mesajEN" />
  </div>
</form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import TranslatedText from '@/components/TranslatedText.vue';
import { useLanguage } from '@/composables/useLanguage';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});

const { language } = useLanguage();

const emit = defineEmits(['update:modelValue']);

const formData = ref({
  adSoyad: '',
  email: '',
  telefon: '',
  website: '',
  projeTuru: '',
  detaylar: ''
});

const formGonderiliyor = ref(false);
const formDurumu = ref(null);

const gonderTeklifFormu = async () => {
  formGonderiliyor.value = true;
  
  try {
    // Sunucuya gönder
    const response = await fetch('http://66.179.240.190:3000/api/teklif', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value)
    });
    
    if (!response.ok) {
      throw new Error('Sunucu hatası');
    }
    
    // Başarılı gönderim
    formDurumu.value = {
      basarili: true,
      mesajTR: 'Teklif talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      mesajEN: 'Your quote request has been sent successfully. We will get back to you as soon as possible.'
    };
    
    // Formu temizle
    formData.value = {
      adSoyad: '',
      email: '',
      telefon: '',
      website: '',
      projeTuru: '',
      detaylar: ''
    };
    
    // 3 saniye sonra modalı kapat
    setTimeout(() => {
      formDurumu.value = null;
      emit('update:modelValue', false);
    }, 3000);
    
  } catch (error) {
    // Hata durumu
    formDurumu.value = {
      basarili: false,
      mesajTR: 'Teklif talebi gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.',
      mesajEN: 'An error occurred while sending your quote request. Please try again later.'
    };
    console.error('Form gönderim hatası:', error);
  } finally {
    formGonderiliyor.value = false;
  }
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>