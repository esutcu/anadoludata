<!-- components/TeklifModal.vue -->
<template>
  <div v-if="modelValue" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-anadolu-navy">Teklif Alın</h2>
          <button @click="$emit('update:modelValue', false)" class="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <form @submit.prevent="gonderTeklif" class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium">Adınız Soyadınız <span class="text-red-500">*</span></label>
            <input 
              type="text" 
              class="w-full p-2 border rounded" 
              v-model="formData.adSoyad"
              maxlength="100"
              required 
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">E-posta <span class="text-red-500">*</span></label>
            <input 
              type="email" 
              class="w-full p-2 border rounded" 
              v-model="formData.email"
              maxlength="100"
              required 
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">Telefon <span class="text-red-500">*</span></label>
            <input 
              type="tel" 
              class="w-full p-2 border rounded" 
              v-model="formData.telefon"
              maxlength="20"
              required 
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">Web Siteniz <span class="text-gray-400">(Varsa)</span></label>
            <input 
              type="url" 
              class="w-full p-2 border rounded" 
              v-model="formData.website"
              maxlength="150"
              placeholder="https://example.com"
            />
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">Proje Türü <span class="text-red-500">*</span></label>
            <select class="w-full p-2 border rounded" v-model="formData.projeTuru" required>
              <option value="">Seçiniz</option>
              <option value="web">Web Sitesi/Uygulaması</option>
              <option value="mobil">Mobil Uygulama</option>
              <option value="pwa">Progressive Web App</option>
              <option value="blockchain">Blockchain Projesi</option>
              <option value="crm">CRM Çözümü</option>
              <option value="diger">Diğer</option>
            </select>
          </div>
          
          <div class="space-y-2">
            <label class="text-sm font-medium">Proje Detayları <span class="text-red-500">*</span></label>
            <textarea 
              rows="4" 
              class="w-full p-2 border rounded"
              v-model="formData.detaylar"
              maxlength="500"
              required
            ></textarea>
            <div class="text-xs text-gray-500 flex justify-between">
              <span>Kalan karakter: {{ 500 - formData.detaylar.length }}</span>
              <span>Maksimum 500 karakter</span>
            </div>
          </div>
          
          <Button 
            class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90 text-white"
            type="submit" 
            :disabled="gonderiliyor"
          >
            {{ gonderiliyor ? 'Gönderiliyor...' : 'Teklif İsteği Gönder' }}
          </Button>
          
          <!-- Form gönderim durumu -->
          <div v-if="formDurumu" class="mt-4 p-3 rounded" :class="formDurumu.basarili ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
            {{ formDurumu.mesaj }}
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
      mesaj: 'Teklif isteğiniz alınmıştır. 24 saat içinde size dönüş yapacağız.'
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
      mesaj: 'Teklif isteği gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    };
    console.error('Form gönderim hatası:', error);
  } finally {
    gonderiliyor.value = false;
  }
};
</script>