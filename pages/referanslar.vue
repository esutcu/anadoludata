<template>
  <div>
    <NavBar @acTeklifModal="acTeklifModal" />
    
    <section class="py-16 bg-gradient-to-b from-anadolu-beige/10 to-anadolu-teal/5">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-16 text-center text-anadolu-navy">
          <TranslatedText 
            turkish="Çalışmalarımız" 
            english="Our Projects" 
          />
        </h1>
        
        <div class="space-y-20">
          <!-- Proje 1 -->
          <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
            <div class="p-6 md:p-8">
              <h2 class="text-2xl font-bold text-anadolu-teal mb-4">
                <TranslatedText 
                  turkish="Bölgesel Hayvan Takibi ve Klinik Yönetimi Sistemi" 
                  english="Clinic Management System" 
                />
              </h2>
              <p class="text-gray-700 mb-8">
                <TranslatedText 
                  turkish="Klinik ve saha hizmetlerini birleştiren bu projede, büyükbaş ve küçükbaş hayvanlar için dijital kayıt, periyodik aşı takibi ve yetiştiriciye özel sağlık geçmişi takibi entegre edildi."
                  english="In this project that combines clinic and field services, digital registration, periodic vaccination tracking, and breeder-specific health history tracking were integrated for cattle and small ruminants."
                />
              </p>
              
              <div class="flex flex-col space-y-4">
                <h3 class="font-semibold text-gray-800">
                  <TranslatedText 
                    turkish="Kullanılan Teknolojiler:" 
                    english="Technologies Used:" 
                  />
                </h3>
                <!-- Teknoloji ikonları aynı kalabilir -->
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
    <h2 class="text-2xl font-bold text-anadolu-teal mb-4">
      <TranslatedText 
        turkish="Butik Otel İçin Online Rezervasyon ve İçerik Yönetimi" 
        english="Hotel Reservation and Management System"
      />
    </h2>
    <p class="text-gray-700 mb-8">
      <TranslatedText
        turkish="Bölgesel bir butik otel için geliştirilen sistemde, kullanıcılar sezona göre online rezervasyon yapabiliyor; işletme sahipleri ise yönetim paneli üzerinden fiyat, galeri ve içerikleri kolayca güncelleyebiliyor."
        english="In the system developed for a regional boutique hotel, users can make online reservations according to the season, while business owners can easily update prices, gallery, and content through the management panel."
      />
    </p>
    
    <div class="flex flex-col space-y-4">
      <h3 class="font-semibold text-gray-800">
        <TranslatedText
          turkish="Kullanılan Teknolojiler:"
          english="Technologies Used:"
        />
      </h3>
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
    <h2 class="text-2xl font-bold text-anadolu-teal mb-4">
      <TranslatedText
        turkish="Takı ve Aksesuarlar İçin Online Satış Platformu"
        english="Jewelry Sales Platform"
      />
    </h2>
    <p class="text-gray-700 mb-8">
      <TranslatedText
        turkish="El yapımı takılar ve butik ürünlerin dijital vitrinle sunulabildiği, mobil uyumlu bir e-ticaret altyapısı geliştirildi. Ürün yükleme, varyant yönetimi ve sipariş takibi panel üzerinden kolayca yönetilebiliyor."
        english="A mobile-friendly e-commerce infrastructure was developed where handmade jewelry and boutique products can be presented with a digital showcase. Product upload, variant management, and order tracking can be easily managed through the panel."
      />
    </p>
    
    <div class="flex flex-col space-y-4">
      <h3 class="font-semibold text-gray-800">
        <TranslatedText
          turkish="Kullanılan Teknolojiler:"
          english="Technologies Used:"
        />
      </h3>
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
    <h2 class="text-2xl font-bold text-anadolu-teal mb-4">
      <TranslatedText
        turkish="Bireysel Eğitmenler İçin Online Ders ve Test Paneli"
        english="Online Educaion and Test Panel"
      />
    </h2>
    <p class="text-gray-700 mb-8">
      <TranslatedText
        turkish="Özel ders veren eğitmenler için video, materyal ve test paylaşımı yapılabilen, öğrenciye özel ilerleme takibi sunan bir yönetim sistemi geliştirildi. Mobilde sade, masaüstünde detaylı kullanım deneyimi sağlandı."
        english="A management system was developed for private tutors, allowing them to share videos, materials, and tests, and providing student-specific progress tracking. It offers a simple experience on mobile and a detailed user experience on desktop."
      />
    </p>
    
    <div class="flex flex-col space-y-4">
      <h3 class="font-semibold text-gray-800">
        <TranslatedText
          turkish="Kullanılan Teknolojiler:"
          english="Technologies Used:"
        />
      </h3>
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
    <h2 class="text-2xl font-bold text-anadolu-teal mb-4">
      <TranslatedText
        turkish="Sosyal Medya Fenomenleri İçin Reklam İş Birliği ve Özel Mobil Uygulama"
        english="Custom Mobile App for Influencers"
      />
    </h2>
    <p class="text-gray-700 mb-8">
      <TranslatedText
        turkish="Influencer'lar ile markaların iş birliklerini yöneten bu özel platformda, teklif süreçleri, içerik yönetimi ve teslimatlar mobil uygulama üzerinden yürütüldü. Sistem özel olarak Android APK formatında geliştirildi."
        english="In this special platform that manages collaborations between influencers and brands, offer processes, content management, and deliveries were carried out through a mobile app. The system was specially developed in Android APK format."
      />
    </p>
    
    <div class="flex flex-col space-y-4">
      <h3 class="font-semibold text-gray-800">
        <TranslatedText
          turkish="Kullanılan Teknolojiler:"
          english="Technologies Used:"
        />
      </h3>
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
    <h2 class="text-2xl font-bold text-anadolu-teal mb-4">
      <TranslatedText
        turkish="NFT Tabanlı Ödül Yönetim Sistemi"
        english="NFT Reward System"
      />
    </h2>
    <p class="text-gray-700 mb-8">
      <TranslatedText
        turkish="Blockchain teknolojisiyle geliştirilen bu platform, başarı, katılım veya etkinlik bazlı ödüllerin NFT formatında dağıtılmasını sağlar. Akıllı sözleşmelerle güvenilir ve şeffaf bir ödül altyapısı oluşturulmuştur."
        english="Developed with blockchain technology, this platform enables the distribution of achievement, participation, or event-based rewards in NFT format. A reliable and transparent reward infrastructure has been created with smart contracts."
      />
    </p>
    
    <div class="flex flex-col space-y-4">
      <h3 class="font-semibold text-gray-800">
        <TranslatedText
          turkish="Kullanılan Teknolojiler:"
          english="Technologies Used:"
        />
      </h3>
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
import TranslatedText from '@/components/TranslatedText.vue';
import { useLanguage } from '@/composables/useLanguage';

const { language } = useLanguage();

// SEO için head bilgileri
useHead({
  title: language.value === 'tr' ? 'Çalışmalarımız - AnadoluData' : 'Our Projects - AnadoluData',
  meta: [
    { 
      name: 'description', 
      content: language.value === 'tr' 
        ? 'AnadoluData tarafından geliştirilen web, mobil ve blockchain projeleri. Modern teknolojilerle geliştirilen özel çözümler.' 
        : 'Web, mobile, and blockchain projects developed by AnadoluData. Custom solutions developed with modern technologies.'
    },
    { 
      name: 'keywords', 
      content: language.value === 'tr'
        ? 'AnadoluData projeler, web uygulama, mobil uygulama, blockchain, NFT, e-ticaret'
        : 'AnadoluData projects, web application, mobile application, blockchain, NFT, e-commerce'
    }
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