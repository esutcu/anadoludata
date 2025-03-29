<template>
  <div class="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div class="container mx-auto flex h-20 items-center justify-between px-6">
      <!-- Logo ve İsim - Büyütülmüş -->
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-3 hover:opacity-90 transition-opacity duration-300">
          <img src="/images/logo.svg" alt="AnadoluData Logo" class="h-10 w-auto">
          <span class="text-2xl font-bold text-anadolu-teal tracking-tight">AnadoluData</span>
        </a>
      </div>

      <!-- Desktop Menu - Yeniden Düzenlenmiş -->
      <div class="hidden md:flex flex-1 justify-center">
        <NavigationMenu>
          <NavigationMenuList class="space-x-8">
            <NavigationMenuItem>
              <NavigationMenuLink 
                :href="isProjectsPage ? '/#hizmetler' : '#hizmetler'" 
                class="text-base font-medium text-anadolu-navy transition-all duration-300 hover:text-anadolu-teal relative group"
                @click="!isProjectsPage && kaydirSectionIcin('hizmetler')">
                <TranslatedText turkish="Hizmetlerimiz" english="Our Services" />
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-anadolu-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                :href="isProjectsPage ? '/#teknolojiler' : '#teknolojiler'" 
                class="text-base font-medium text-anadolu-navy transition-all duration-300 hover:text-anadolu-teal relative group"
                @click="!isProjectsPage && kaydirSectionIcin('teknolojiler')">
                <TranslatedText turkish="Teknolojiler" english="Technologies" />
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-anadolu-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                :href="isProjectsPage ? '/#hakkimizda' : '#hakkimizda'" 
                class="text-base font-medium text-anadolu-navy transition-all duration-300 hover:text-anadolu-teal relative group"
                @click="!isProjectsPage && kaydirSectionIcin('hakkimizda')">
                <TranslatedText turkish="Kurumsal" english="About Us" />
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-anadolu-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="/referanslar" 
                class="text-base font-medium text-anadolu-navy transition-all duration-300 hover:text-anadolu-teal relative group">
                <TranslatedText turkish="Projelerimiz" english="Projects" />
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-anadolu-teal transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Sağ Taraf (Dil Seçici + Seperatör + Teklif Butonu) -->
      <div class="hidden md:flex items-center space-x-6">
        <!-- Dil Seçici - Yeniden Tasarlanmış -->
        <div class="flex items-center space-x-3">
          <button 
            @click="setLanguage('tr')" 
            class="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            :class="{'ring-2 ring-anadolu-teal ring-opacity-50': language === 'tr'}"
            aria-label="Türkçe"
          >
            <img src="/images/TR.svg" alt="Türkçe" class="w-8 h-6 shadow-sm">
          </button>
          <button 
            @click="setLanguage('en')" 
            class="p-1.5 rounded-md hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            :class="{'ring-2 ring-anadolu-teal ring-opacity-50': language === 'en'}"
            aria-label="English"
          >
            <img src="/images/EN.svg" alt="English" class="w-8 h-6 shadow-sm">
          </button>
        </div>

        <!-- Dikey Seperatör -->
        <div class="h-8 w-px bg-gray-200"></div>

        <!-- Teklif Butonu - Yeniden Tasarlanmış -->
        <Button 
          class="bg-anadolu-teal hover:bg-anadolu-teal/90 text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg" 
          @click="teklifModalAcik = true">
          <TranslatedText turkish="Teklif Alın" english="Get Quote" />
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