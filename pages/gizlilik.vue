<template>
  <div>
    <!-- NavBar bileşenini ekleyelim -->
    <NavBar @acTeklifModal="acTeklifModal" />
    
    <section class="py-20 bg-white text-gray-800">
      <div class="container mx-auto px-4 max-w-4xl">
        <h1 class="text-4xl font-bold mb-6 text-anadolu-teal">
          <TranslatedText turkish="Gizlilik Politikası" english="Privacy Policy" />
        </h1>
        <p class="mb-4">
          <TranslatedText 
            turkish="AnadoluData olarak, kullanıcılarımızın gizliliğini korumayı taahhüt ediyoruz. Bu gizlilik politikası, web sitemizi kullanırken sağladığınız bilgilerin nasıl toplandığını, kullanıldığını ve korunduğunu açıklar."
            english="At AnadoluData, we are committed to protecting the privacy of our users. This privacy policy explains how information you provide is collected, used, and protected when using our website."
          />
        </p>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="1. Toplanan Bilgiler" english="1. Info Collected" />
        </h2>
        <p class="mb-2">
          <TranslatedText 
            turkish="İletişim formu aracılığıyla aşağıdaki kişisel bilgiler toplanabilir:"
            english="Personal information may be collected through the contact form:"
          />
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            <TranslatedText turkish="Ad ve Soyad" english="Full Name" />
          </li>
          <li>
            <TranslatedText turkish="E-posta adresi" english="Email address" />
          </li>
          <li>
            <TranslatedText turkish="Telefon numarası (isteğe bağlı)" english="Phone number (optional)" />
          </li>
          <li>
            <TranslatedText turkish="Mesaj içeriği" english="Message" />
          </li>
        </ul>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="2. Bilgi Kullanımı" english="2. Use of Info" />
        </h2>
        <p class="mb-4">
          <TranslatedText 
            turkish="Toplanan bilgiler, sadece aşağıdaki amaçlarla kullanılır:"
            english="The collected information is used only for:"
          />
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            <TranslatedText turkish="İletişim taleplerine yanıt vermek" english="Responding to contact requests" />
          </li>
          <li>
            <TranslatedText turkish="Hizmet kalitemizi geliştirmek" english="Improving our service quality" />
          </li>
          <li>
            <TranslatedText turkish="İstatistiksel analiz ve geliştirme süreçleri" english="Statistical analysis and development processes" />
          </li>
        </ul>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="3. Bilgi Paylaşımı" english="3. Info Sharing" />
        </h2>
        <p class="mb-4">
          <TranslatedText 
            turkish="Kişisel bilgileriniz üçüncü şahıslarla paylaşılmaz, satılmaz veya kiralanmaz. Yasal zorunluluklar dışında hiçbir kurum veya kişiyle paylaşılmaz."
            english="Your personal information is not shared, sold, or rented to third parties. It is not shared with any institution or person except for legal obligations."
          />
        </p>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="4. Güvenlik" english="4. Security" />
        </h2>
        <p class="mb-4">
          <TranslatedText 
            turkish="Verilerinizin gizliliği ve bütünlüğü bizim için önemlidir. Bu nedenle, veriler SSL (güvenli bağlantı) ile iletilir ve yetkisiz erişime karşı koruma sağlanır."
            english="The privacy and integrity of your data is important to us. Therefore, data is transmitted via SSL (secure connection) and protected against unauthorized access."
          />
        </p>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="5. Çerezler" english="5. Cookies" />
        </h2>
        <p class="mb-4">
          <TranslatedText 
            turkish="Sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz."
            english="Our site may use cookies to improve user experience. You can disable cookies from your browser settings."
          />
        </p>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="6. Haklarınız" english="6. Rights" />
        </h2>
        <p class="mb-4">
          <TranslatedText 
            turkish="Kişisel verileriniz üzerinde her zaman erişim, düzeltme veya silme talebinde bulunabilirsiniz. İlgili talepler için bizimle"
            english="You can always request access, correction, or deletion of your personal data. Contact us at"
          />
          <a href="mailto:bilgi@anadoludata.com" class="text-anadolu-teal underline">bilgi@anadoludata.com</a>
          <TranslatedText 
            turkish="adresinden iletişime geçebilirsiniz."
            english="."
          />
        </p>
  
        <h2 class="text-2xl font-semibold mt-8 mb-4">
          <TranslatedText turkish="7. Değişiklikler" english="7. Changes" />
        </h2>
        <p class="mb-4">
          <TranslatedText 
            turkish="Gizlilik politikası zaman zaman güncellenebilir. Güncellemeler bu sayfada yayımlanır."
            english="Privacy policy may be updated from time to time. Updates are published on this page."
          />
        </p>
  
        <p class="mt-12 text-sm text-gray-500">
          <TranslatedText 
            turkish="Yürürlük Tarihi: 26 Mart 2025"
            english="Effective Date: March 26, 2025"
          />
        </p>
      </div>
    </section>
    
    <!-- Teklif Modal -->
    <TeklifModal v-model="teklifModalAcik" />
    
    <!-- ScrollToTop Butonu -->
    <ScrollToTop />
  </div>
</template>
  
<script setup>
import TranslatedText from '@/components/TranslatedText.vue';
import { useLanguage } from '@/composables/useLanguage';
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import TeklifModal from '@/components/TeklifModal.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import { useHead } from '#imports';

const { language } = useLanguage();

// Teklif modal durumu
const teklifModalAcik = ref(false);

// Teklif modalını açma fonksiyonu
const acTeklifModal = () => {
  teklifModalAcik.value = true;
};

// SEO için head bilgileri
useHead({
  title: language.value === 'tr' ? 'Gizlilik Politikası - AnadoluData' : 'Privacy Policy - AnadoluData',
  meta: [
    { 
      name: 'description', 
      content: language.value === 'tr' 
        ? 'AnadoluData gizlilik politikası ve kişisel veri koruma bilgileri.' 
        : 'AnadoluData privacy policy and personal data protection information.'
    }
  ]
});
</script>