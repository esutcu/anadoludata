<!-- components/NavBar.vue -->
<template>
  <div class="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Logo - Anasayfaya dönüş için kullanılabilir -->
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-2">
          <img src="/images/logo.svg" alt="AnadoluData Logo" class="h-8 w-auto">
          <span class="text-xl font-bold text-anadolu-teal">AnadoluData</span>
        </a>
      </div>

      <!-- Desktop Menu - Sadeleştirilmiş -->
      <div class="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList class="space-x-6">
            <!-- Anasayfa kaldırıldı -->

            <NavigationMenuItem>
              <NavigationMenuLink 
                :href="isProjectsPage ? '/#hizmetler' : '#hizmetler'" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition"
                @click="!isProjectsPage && kaydirSectionIcin('hizmetler')">
                <TranslatedText turkish="Hizmetler" english="Services" />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                :href="isProjectsPage ? '/#teknolojiler' : '#teknolojiler'" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition"
                @click="!isProjectsPage && kaydirSectionIcin('teknolojiler')">
                <TranslatedText turkish="Teknolojiler" english="Technologies" />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                :href="isProjectsPage ? '/#hakkimizda' : '#hakkimizda'" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition"
                @click="!isProjectsPage && kaydirSectionIcin('hakkimizda')">
                <TranslatedText turkish="Hakkımızda" english="About" />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/referanslar" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition">
                <TranslatedText turkish="Projeler" english="Projects" />
              </NavigationMenuLink>
            </NavigationMenuItem>

            <!-- İletişim kaldırıldı -->
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Sadece Dil Seçici (Desktop) - Büyütülmüş bayraklar -->
      <div class="hidden md:flex items-center">
        <div class="flex items-center space-x-3">
          <button 
            @click="setLanguage('tr')" 
            class="p-1 rounded hover:bg-gray-200 transition-colors"
            :class="{'ring-2 ring-anadolu-teal': language === 'tr'}"
            aria-label="Türkçe"
          >
            <img src="/images/TR.svg" alt="Türkçe" class="w-8 h-6">
          </button>
          <button 
            @click="setLanguage('en')" 
            class="p-1 rounded hover:bg-gray-200 transition-colors"
            :class="{'ring-2 ring-anadolu-teal': language === 'en'}"
            aria-label="English"
          >
            <img src="/images/EN.svg" alt="English" class="w-8 h-6">
          </button>
        </div>
      </div>

      <!-- Contact Button -->
      <div class="hidden md:block ml-6">
        <Button class="bg-anadolu-teal hover:bg-anadolu-teal/90 text-white" @click="teklifModalAcik = true">
          <TranslatedText turkish="Teklif Al" english="Get Quo" />
        </Button>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        class="md:hidden" 
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Menüyü Aç/Kapat"
        title="Menüyü Aç/Kapat">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>

      <!-- Mobile Menu - Bu bölüm aynı kalabilir -->
      <div v-if="mobileMenuOpen" class="absolute inset-x-0 top-16 z-50 md:hidden">
        <div class="border-t bg-white p-4 shadow-lg">
          <div class="flex flex-col space-y-3">
            <!-- Menü öğelerini kapsayan div'e display: block ekle -->
            <div class="block w-full">
              <a href="/" class="block w-full py-2 font-medium text-anadolu-navy hover:text-anadolu-teal transition">
                <TranslatedText turkish="Anasayfa" english="Home" />
              </a>
              
              <a :href="isProjectsPage ? '/#hizmetler' : '#hizmetler'" class="block w-full py-2 font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="!isProjectsPage && kaydirSectionIcin('hizmetler')">
                <TranslatedText turkish="Hizmetler" english="Services" />
              </a>
              
              <a :href="isProjectsPage ? '/#teknolojiler' : '#teknolojiler'" class="block w-full py-2 font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="!isProjectsPage && kaydirSectionIcin('teknolojiler')">
                <TranslatedText turkish="Teknolojiler" english="Technologies" />
              </a>
              <a :href="isProjectsPage ? '/#hakkimizda' : '#hakkimizda'" class="block w-full py-2 font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="!isProjectsPage && kaydirSectionIcin('hakkimizda')">
                <TranslatedText turkish="Hakkımızda" english="About" />
              </a>
              <a href="/referanslar" class="block w-full py-2 font-medium text-anadolu-navy hover:text-anadolu-teal transition">
                <TranslatedText turkish="Projeler" english="Projects" />
              </a>
              <a :href="isProjectsPage ? '/#iletisim' : '#iletisim'" class="block w-full py-2 font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="!isProjectsPage && kaydirSectionIcin('iletisim')">
                <TranslatedText turkish="İletişim" english="Contact" />
              </a>
            </div>
          </div>
          
          <!-- Dil seçici bayrakları (Mobile) - Büyütülmüş -->
          <div class="flex items-center space-x-3 mt-4 border-t pt-4 mb-4">
            <span class="text-sm text-gray-500 mr-2">
              <TranslatedText turkish="Dil:" english="Language:" />
            </span>
            <button 
              @click="setLanguage('tr')" 
              class="p-1 rounded hover:bg-gray-200 transition-colors"
              :class="{'ring-2 ring-anadolu-teal': language === 'tr'}"
              aria-label="Türkçe"
            >
              <img src="/images/TR.svg" alt="Türkçe" class="w-8 h-6">
            </button>
            <button 
              @click="setLanguage('en')" 
              class="p-1 rounded hover:bg-gray-200 transition-colors"
              :class="{'ring-2 ring-anadolu-teal': language === 'en'}"
              aria-label="English"
            >
              <img src="/images/EN.svg" alt="English" class="w-8 h-6">
            </button>
          </div>
          
          <!-- Mobile Social Media -->
          <div class="flex items-center space-x-4 mt-4 border-t pt-4">
            <a href="https://x.com/anadoludata_" target="_blank" class="text-anadolu-navy hover:text-anadolu-teal transition">
              <img src="/images/icons/social/twitter.svg" alt="Twitter" class="w-5 h-5">
            </a>
            <a href="https://www.instagram.com/anadoludata/" target="_blank" class="text-anadolu-navy hover:text-anadolu-teal transition">
              <img src="/images/icons/social/instagram.svg" alt="Instagram" class="w-5 h-5">
            </a>
            <a href="https://github.com/anadoludata" target="_blank" class="text-anadolu-navy hover:text-anadolu-teal transition">
              <img src="/images/icons/social/github.svg" alt="GitHub" class="w-5 h-5">
            </a>
          </div>
          
          <div class="mt-4">
            <Button class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90 text-white" @click="teklifModalAcik = true">
              <TranslatedText turkish="Teklif Al" english="Get Quote" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Teklif Al Modal -->
  <TeklifModal v-model="teklifModalAcik" />
</template>

<script setup>
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import TeklifModal from './TeklifModal.vue';
import { useLanguage } from '@/composables/useLanguage';
import TranslatedText from '@/components/TranslatedText.vue';

// Props ekleyelim
const props = defineProps({
  isProjectsPage: {
    type: Boolean,
    default: false
  }
});

const mobileMenuOpen = ref(false);
const mobileServicesOpen = ref(false);
const teklifModalAcik = ref(false);

// Dil sistemi eklemesi
const { language, setLanguage } = useLanguage();

const kaydirSectionIcin = (id, kartIndex) => {
  // Proje sayfasında isek bir şey yapma - linkler zaten '/#' formatında olacak
  if (props.isProjectsPage) {
    return;
  }
  
  const element = document.getElementById(id);
  if (element) {
    mobileMenuOpen.value = false; // Mobil menüyü kapat
    element.scrollIntoView({ behavior: 'smooth' });
    
    // Eğer kartIndex belirtilmişse, kartı vurgula
    if (kartIndex !== undefined) {
      setTimeout(() => {
        const kartlar = document.querySelectorAll('#hizmetler .grid > div');
        if (kartlar[kartIndex]) {
          kartlar[kartIndex].classList.add('ring-2', 'ring-anadolu-teal');
          setTimeout(() => {
            kartlar[kartIndex].classList.remove('ring-2', 'ring-anadolu-teal');
          }, 2000);
        }
      }, 800);
    }
  }
};
</script>