<!-- components/NavBar.vue -->
<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <img src="/images/logo.svg" alt="AnadoluData Logo" class="h-8 w-auto" />
          <h1 class="text-xl font-bold text-anadolu-teal">AnadoluData</h1>
        </div>

        <!-- Menü Öğeleri - Mobilde gizli, orta ve büyük ekranlarda görünür -->
        <div class="hidden md:flex items-center space-x-6">
          <a v-for="(item, index) in menuItems" :key="index" 
             :href="item.link" 
             class="text-gray-700 hover:text-anadolu-teal transition-colors duration-200"
             @click.prevent="kaydirSectionIcin(item.id)">
            {{ item.label }}
          </a>
          <Button class="bg-anadolu-teal hover:bg-anadolu-teal/90" @click="acTeklifModal">
            Teklif Al
          </Button>
        </div>

        <!-- Mobil Menü Butonu -->
        <div class="md:hidden">
  <button 
    @click="mobileMenuOpen = !mobileMenuOpen" 
    class="text-gray-700 focus:outline-none"
    aria-label="Mobil menüyü aç/kapat" 
    title="Mobil menüyü aç/kapat"
  >
    <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>
      </div>
    </div>

    <!-- Mobil Menü -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg">
      <div class="container mx-auto px-4 py-3 space-y-2">
        <a v-for="(item, index) in menuItems" :key="index" 
           :href="item.link" 
           class="block py-2 text-gray-700 hover:text-anadolu-teal"
           @click.prevent="kaydirMobilSection(item.id)">
          {{ item.label }}
        </a>
        <Button class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90" @click="mobileTeklifOpen">
          Teklif Al
        </Button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';

const mobileMenuOpen = ref(false);

const menuItems = [
  { label: 'Ana Sayfa', id: 'anasayfa', link: '#anasayfa' },
  { label: 'Hizmetler', id: 'hizmetler', link: '#hizmetler' },
  { label: 'Teknolojiler', id: 'teknolojiler', link: '#teknolojiler' },
  { label: 'Hakkımızda', id: 'hakkimizda', link: '#hakkimizda' },
  { label: 'İletişim', id: 'iletisim', link: '#iletisim' }
];

const emit = defineEmits(['acTeklifModal']);

const kaydirSectionIcin = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Offset ekleyerek navbar'ın altına kaydır
    const yOffset = -80; // Navbar yüksekliğine göre ayarlayın
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
};

const kaydirMobilSection = (id) => {
  mobileMenuOpen.value = false; // Menüyü kapat
  kaydirSectionIcin(id); // Kaydırma işlemini yap
};

const acTeklifModal = () => {
  emit('acTeklifModal'); // Emit kullanımı doğru şekilde
};

const mobileTeklifOpen = () => {
  mobileMenuOpen.value = false; // Menüyü kapat
  emit('acTeklifModal'); // Emit kullanımı doğru şekilde
};
</script>