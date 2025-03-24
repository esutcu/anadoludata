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

          <h2 class="text-2xl font-bold mb-4 text-anadolu-teal">Teklif Formu</h2>
          
          <form class="space-y-4" @submit.prevent="gonderTeklifFormu">
  <div class="space-y-2">
    <label for="adsoyad-input" class="text-sm font-medium">Ad Soyad <span class="text-red-500">*</span></label>
    <input 
      id="adsoyad-input"
      type="text" 
      class="w-full p-2 border rounded" 
      v-model="formData.adSoyad"
      maxlength="100"
      placeholder="Ad ve soyadınız"
      required 
    />
  </div>
  
  <div class="space-y-2">
    <label for="teklif-email-input" class="text-sm font-medium">E-posta <span class="text-red-500">*</span></label>
    <input 
      id="teklif-email-input"
      type="email" 
      class="w-full p-2 border rounded" 
      v-model="formData.email"
      maxlength="100"
      placeholder="E-posta adresiniz"
      required 
    />
  </div>
  
  <div class="space-y-2">
    <label for="teklif-telefon-input" class="text-sm font-medium">Telefon <span class="text-red-500">*</span></label>
    <input 
      id="teklif-telefon-input"
      type="tel" 
      class="w-full p-2 border rounded" 
      v-model="formData.telefon"
      maxlength="20"
      placeholder="Telefon numaranız"
      required 
    />
  </div>
  
  <div class="space-y-2">
    <label for="website-input" class="text-sm font-medium">Web Sitesi</label>
    <input 
      id="website-input"
      type="url" 
      class="w-full p-2 border rounded" 
      v-model="formData.website"
      maxlength="100"
      placeholder="Varsa web siteniz"
    />
  </div>
  
  <div class="space-y-2">
    <label for="projeturu-input" class="text-sm font-medium">Proje Türü <span class="text-red-500">*</span></label>
    <select 
      id="projeturu-input"
      class="w-full p-2 border rounded" 
      v-model="formData.projeTuru"
      required
    >
      <option value="">Seçiniz</option>
      <option value="Web Geliştirme">Web Geliştirme</option>
      <option value="Mobil Uygulama">Mobil Uygulama</option>
      <option value="E-Ticaret">E-Ticaret</option>
      <option value="Blockchain">Blockchain</option>
      <option value="Diğer">Diğer</option>
    </select>
  </div>
  
  <div class="space-y-2">
    <label for="detaylar-input" class="text-sm font-medium">Proje Detayları <span class="text-red-500">*</span></label>
    <textarea 
      id="detaylar-input"
      rows="4" 
      class="w-full p-2 border rounded"
      v-model="formData.detaylar"
      maxlength="500"
      placeholder="Projeniz hakkında detaylı bilgi..."
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
    :disabled="formGonderiliyor"
  >
    {{ formGonderiliyor ? 'Gönderiliyor...' : 'Teklif Al' }}
  </Button>

  <!-- Form gönderim durumu -->
  <div v-if="formDurumu" class="mt-4 p-3 rounded" :class="formDurumu.basarili ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
    {{ formDurumu.mesaj }}
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

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
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
      mesaj: 'Teklif talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
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
      mesaj: 'Teklif talebi gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
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