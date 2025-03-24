<!-- components/NavBar.vue -->
<template>
  <div class="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <!-- Logo -->
      <div class="flex items-center">
        <a href="/" class="flex items-center gap-2">
          <img src="/images/logo.svg" alt="AnadoluData Logo" class="h-8 w-auto">
          <span class="text-xl font-bold text-anadolu-teal">AnadoluData</span>
        </a>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList class="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink href="#anasayfa" class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition">
                Anasayfa
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition">
                Hizmetler
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="w-48 p-2">
                  <NavigationMenuLink 
                    href="#hizmetler" 
                    class="block rounded-md px-3 py-2 text-sm font-medium hover:bg-anadolu-beige/10 hover:text-anadolu-teal"
                    @click="kaydirSectionIcin('hizmetler')">
                    Web Çözümleri
                  </NavigationMenuLink>
                  <NavigationMenuLink 
                    href="#hizmetler" 
                    class="block rounded-md px-3 py-2 text-sm font-medium hover:bg-anadolu-beige/10 hover:text-anadolu-teal"
                    @click="kaydirSectionIcin('hizmetler')">
                    Mobil Uygulamalar
                  </NavigationMenuLink>
                  <NavigationMenuLink 
                    href="#hizmetler" 
                    class="block rounded-md px-3 py-2 text-sm font-medium hover:bg-anadolu-beige/10 hover:text-anadolu-teal"
                    @click="kaydirSectionIcin('hizmetler')">
                    Blockchain
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#teknolojiler" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition"
                @click="kaydirSectionIcin('teknolojiler')">
                Teknolojiler
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#hakkimizda" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition"
                @click="kaydirSectionIcin('hakkimizda')">
                Hakkımızda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink 
                href="#iletisim" 
                class="text-base font-medium text-anadolu-navy hover:text-anadolu-teal transition"
                @click="kaydirSectionIcin('iletisim')">
                İletişim
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <!-- Social Media Icons -->
      <div class="hidden md:flex items-center space-x-4">
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

      <!-- Contact Button -->
      <div class="hidden md:block ml-6">
        <Button class="bg-anadolu-teal hover:bg-anadolu-teal/90 text-white" @click="teklifModalAcik = true">Teklif Al</Button>
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

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="absolute inset-x-0 top-16 z-50 md:hidden">
        <div class="border-t bg-white p-4 shadow-lg">
          <div class="flex flex-col space-y-3">
            <a href="#anasayfa" class="font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('anasayfa')">Anasayfa</a>
            <button @click="mobileServicesOpen = !mobileServicesOpen" class="font-medium text-anadolu-navy hover:text-anadolu-teal transition flex items-center justify-between">
              Hizmetler
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div v-if="mobileServicesOpen" class="pl-4 py-2 space-y-2">
              <a href="#hizmetler" class="block text-sm font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('hizmetler')">Web Çözümleri</a>
              <a href="#hizmetler" class="block text-sm font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('hizmetler')">Mobil Uygulamalar</a>
              <a href="#hizmetler" class="block text-sm font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('hizmetler')">Blockchain</a>
            </div>
            <a href="#teknolojiler" class="font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('teknolojiler')">Teknolojiler</a>
            <a href="#hakkimizda" class="font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('hakkimizda')">Hakkımızda</a>
            <a href="#iletisim" class="font-medium text-anadolu-navy hover:text-anadolu-teal transition" @click="kaydirSectionIcin('iletisim')">İletişim</a>
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
            <Button class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90 text-white" @click="teklifModalAcik = true">Teklif Al</Button>
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

const mobileMenuOpen = ref(false);
const mobileServicesOpen = ref(false);
const teklifModalAcik = ref(false);

const kaydirSectionIcin = (id) => {
  const element = document.getElementById(id);
  if (element) {
    mobileMenuOpen.value = false; // Mobil menüyü kapat
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>