<template>
  <div>
    <NavBar @acTeklifModal="acTeklifModal" />
    
    <section class="py-16 bg-gradient-to-b from-anadolu-beige/10 to-anadolu-teal/5">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-16 text-center text-anadolu-navy">Çalışmalarımız</h1>
        
        <div class="space-y-20">
          <!-- Proje 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">Bölgesel Hayvan Takibi ve Klinik Yönetimi Sistemi</h2>
              <p class="text-gray-700 mb-8">
                Klinik ve saha hizmetlerini birleştiren bu projede, büyükbaş ve küçükbaş hayvanlar için dijital kayıt, periyodik aşı takibi ve yetiştiriciye özel sağlık geçmişi takibi entegre edildi.
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">Kullanılan Teknolojiler:</h3>
                <div class="flex flex-wrap gap-6">
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/vue.svg" alt="Vue.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Vue.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/node_js.svg" alt="Node.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Node.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/tailwindcss.svg" alt="Tailwind CSS" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Tailwind CSS</span>
  </div>
</div>

              </div>
            </div>
          </div>
          
          <!-- Proje 2 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">Butik Otel İçin Online Rezervasyon ve İçerik Yönetimi</h2>
              <p class="text-gray-700 mb-8">
                Bölgesel bir butik otel için geliştirilen sistemde, kullanıcılar sezona göre online rezervasyon yapabiliyor; işletme sahipleri ise yönetim paneli üzerinden fiyat, galeri ve içerikleri kolayca güncelleyebiliyor.
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">Kullanılan Teknolojiler:</h3>
                <div class="flex flex-wrap gap-6">
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/nuxt.svg" alt="Nuxt.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Nuxt.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/firebase.svg" alt="Firebase" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Firebase</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/tailwindcss.svg" alt="Tailwind CSS" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Tailwind CSS</span>
  </div>
</div>

              </div>
            </div>
          </div>
          
          <!-- Proje 3 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">Takı ve Aksesuarlar İçin Online Satış Platformu</h2>
              <p class="text-gray-700 mb-8">
                El yapımı takılar ve butik ürünlerin dijital vitrinle sunulabildiği, mobil uyumlu bir e-ticaret altyapısı geliştirildi. Ürün yükleme, varyant yönetimi ve sipariş takibi panel üzerinden kolayca yönetilebiliyor.
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">Kullanılan Teknolojiler:</h3>
                <div class="flex flex-wrap gap-6">
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/vue.svg" alt="Vue.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Vue.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/stripe.svg" alt="Stripe" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Stripe</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/tailwindcss.svg" alt="Tailwind CSS" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Tailwind CSS</span>
  </div>
</div>

              </div>
            </div>
          </div>
          
          <!-- Proje 4 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">Bireysel Eğitmenler İçin Online Ders ve Test Paneli</h2>
              <p class="text-gray-700 mb-8">
                Özel ders veren eğitmenler için video, materyal ve test paylaşımı yapılabilen, öğrenciye özel ilerleme takibi sunan bir yönetim sistemi geliştirildi. Mobilde sade, masaüstünde detaylı kullanım deneyimi sağlandı.
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">Kullanılan Teknolojiler:</h3>
                <div class="flex flex-wrap gap-6">
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/vue.svg" alt="Vue.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Vue.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/supabase.svg" alt="Supabase" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Supabase</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/tailwindcss.svg" alt="Tailwind CSS" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Tailwind CSS</span>
  </div>
</div>

              </div>
            </div>
          </div>
          
          <!-- Proje 5 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">Sosyal Medya Fenomenleri İçin Reklam İş Birliği ve Özel Mobil Uygulama</h2>
              <p class="text-gray-700 mb-8">
                Influencer'lar ile markaların iş birliklerini yöneten bu özel platformda, teklif süreçleri, içerik yönetimi ve teslimatlar mobil uygulama üzerinden yürütüldü. Sistem özel olarak Android APK formatında geliştirildi.
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">Kullanılan Teknolojiler:</h3>
                <div class="flex flex-wrap gap-6">
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/vue.svg" alt="Vue.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Vue.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/android.svg" alt="Android" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Android</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/firebase.svg" alt="Firebase" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Firebase</span>
  </div>
</div>

              </div>
            </div>
          </div>
          
          <!-- Proje 6 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">NFT Tabanlı Ödül Yönetim Sistemi</h2>
              <p class="text-gray-700 mb-8">
                Blockchain teknolojisiyle geliştirilen bu platform, başarı, katılım veya etkinlik bazlı ödüllerin NFT formatında dağıtılmasını sağlar. Akıllı sözleşmelerle güvenilir ve şeffaf bir ödül altyapısı oluşturulmuştur.
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">Kullanılan Teknolojiler:</h3>
                <div class="flex flex-wrap gap-6">
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/vue.svg" alt="Vue.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Vue.js</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/bsc.svg" alt="Binance Smart Chain" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">BSC</span>
  </div>
  <div class="flex flex-col items-center transition-transform hover:scale-110">
    <img src="/images/icons/social/ethers.svg" alt="Ethers.js" class="h-12 w-12 mb-2">
    <span class="text-sm font-medium">Ethers.js</span>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Teklif Modal -->
    <TeklifModal :modelValue="teklifModalAcik" @update:modelValue="teklifModalAcik = $event" />
    
    <!-- ScrollToTop Butonu -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '#imports';
import TeklifModal from '@/components/TeklifModal.vue';
import NavBar from '@/components/NavBar.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';

// SEO için head bilgileri
useHead({
  title: 'Çalışmalarımız - AnadoluData',
  meta: [
    { name: 'description', content: 'AnadoluData tarafından geliştirilen web, mobil ve blockchain projeleri. Modern teknolojilerle geliştirilen özel çözümler.' },
    { name: 'keywords', content: 'AnadoluData projeler, web uygulama, mobil uygulama, blockchain, NFT, e-ticaret' }
  ]
});

// Teklif modal durumu
const teklifModalAcik = ref(false);

// Teklif modalını açma fonksiyonu
const acTeklifModal = () => {
  teklifModalAcik.value = true;
};
</script>

<style scoped>
/* Bileşene özel stillemeler */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>