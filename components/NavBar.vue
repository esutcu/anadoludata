<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <img src="/images/logo.svg" alt="AnadoluData Logo" class="h-8 w-auto" />
          <h1 class="text-xl font-bold text-anadolu-teal">AnadoluData</h1>
        </NuxtLink>

        <!-- Menü Öğeleri - Mobilde gizli, orta ve büyük ekranlarda görünür -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink 
            v-for="(item, index) in menuItems" 
            :key="index" 
            :to="item.link"
            class="text-gray-700 hover:text-anadolu-teal transition-colors duration-200"
            :class="{ 'font-medium': $route.path === item.link }"
          >
            {{ item.label }}
          </NuxtLink>
          <Button class="bg-anadolu-teal hover:bg-anadolu-teal/90" @click="acTeklifModal">
            Teklif Al
          </Button>
        </div>

        <!-- Mobil Menü Butonu -->
        <div class="md:hidden">
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="text-gray-700 focus:outline-none focus:ring-2 focus:ring-anadolu-teal rounded-md p-1"
            aria-label="Mobil menüyü aç/kapat" 
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
    <div 
      v-if="mobileMenuOpen" 
      class="md:hidden bg-white shadow-lg transform transition-all duration-300"
    >
      <div class="container mx-auto px-4 py-3 space-y-2">
        <NuxtLink 
          v-for="(item, index) in menuItems" 
          :key="index" 
          :to="item.link"
          class="block py-2 text-gray-700 hover:text-anadolu-teal"
          :class="{ 'font-medium': $route.path === item.link }"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
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
import { useRoute } from 'vue-router';

const route = useRoute();
const mobileMenuOpen = ref(false);

const menuItems = [
  { label: 'Ana Sayfa', link: '/' },
  { label: 'Hizmetler', link: '/#hizmetler' },
  { label: 'Teknolojiler', link: '/#teknolojiler' },
  { label: 'Çalışmalarımız', link: '/referanslar' },
  { label: 'Hakkımızda', link: '/#hakkimizda' }
  // İletişim linki kaldırıldı
];

const emit = defineEmits(['acTeklifModal']);

const acTeklifModal = () => {
  emit('acTeklifModal');
};

const mobileTeklifOpen = () => {
  mobileMenuOpen.value = false;
  emit('acTeklifModal');
};
</script>