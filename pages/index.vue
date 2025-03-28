<!-- pages/index.vue - İlk Bölüm (Hero ve Hizmetler) -->
<template>
  <div>
    <!-- NavBar -->
    <NavBar @acTeklifModal="acTeklifModal" />
    
    <!-- Hero Bölümü -->
    <div id="anasayfa" class="bg-gradient-to-b from-anadolu-beige/10 to-anadolu-teal/5 py-20">
      <div class="container mx-auto px-4">
        <div ref="hero" class="flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="md:w-1/2 space-y-6">
            <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
              AnadoluData <span class="text-anadolu-teal">
                <TranslatedText 
                  turkish="Çözümleri" 
                  english="Solutions" 
                />
              </span>
            </h1>
            <p class="text-xl text-anadolu-navy/80 max-w-lg">
              <TranslatedText 
                turkish="Mobil, web, blockchain ve CRM çözümleriyle işletmenizi geleceğe taşıyoruz." 
                english="We carry your business to the future with mobile, web, blockchain and CRM solutions."
              />
            </p>
            <div class="flex flex-wrap gap-4">
              <Button size="lg" class="px-8 bg-anadolu-teal hover:bg-anadolu-teal/90" @click="kaydirSectionIcin('hizmetler')">
                <TranslatedText 
                  turkish="Keşfet" 
                  english="Explore" 
                />
              </Button>
              <Button size="lg" variant="outline" class="px-8 text-anadolu-teal border-anadolu-teal hover:bg-anadolu-teal/10" @click="kaydirSectionIcin('iletisim')">
                <TranslatedText 
                  turkish="İletişim" 
                  english="Contact" 
                />
              </Button>
            </div>
          </div>
          <div class="md:w-1/2">
            <div class="w-full h-auto relative bg-white/50 rounded-lg shadow-xl overflow-hidden">
        <img
  src="/images/herotech.webp"
  alt="AnadoluData Teknoloji"
  width="1600"
  height="800"
  loading="eager"
  decoding="async"
  fetchpriority="high"
  class="w-full h-auto object-cover"
/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Özellikler Bölümü -->
    <div id="hizmetler" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div ref="features" class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">
            <TranslatedText 
              turkish="Dijital Dönüşüm Hizmetlerimiz" 
              english="Digital Services" 
            />
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            <TranslatedText 
              turkish="Modern teknolojilerle özel çözümler geliştiriyoruz" 
              english="We develop custom solutions with modern technologies" 
            />
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Web Çözümleri Kartı -->
          <Card class="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
            <div class="relative h-48 overflow-hidden">
              <img src="/images/icons/social/website1.webp" alt="Web Çözümleri" 
                  class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0">
              <img src="/images/icons/social/website2.webp" alt="Web Çözümleri" 
                  class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            <CardHeader>
              <CardTitle>
                <TranslatedText 
                  turkish="Web Çözümleri" 
                  english="Web Solutions" 
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <TranslatedText 
                  turkish="Modern ve hızlı web uygulamaları, e-ticaret sistemleri ve kurumsal web siteleri geliştiriyoruz." 
                  english="We develop modern and fast web applications, e-commerce systems, and corporate websites." 
                />
              </p>
            </CardContent>
          </Card>

          <!-- Mobil Uygulamalar Kartı -->
          <Card class="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
            <div class="relative h-48 overflow-hidden">
              <!-- Lazy yükleme -->
              <img
                src="/images/icons/social/mobile1.webp"
                alt="Mobil Uygulamalar"
                loading="lazy"
                width="400"
                height="200"
                class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <!-- Hover'da gelen -->
              <img
                src="/images/icons/social/mobile2.webp"
                alt="Mobil Uygulamalar"
                loading="lazy"
                width="400"
                height="200"
                class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>
                <TranslatedText 
                  turkish="Mobil Uygulamalar" 
                  english="Mobile Apps" 
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <TranslatedText 
                  turkish="iOS ve Android için native performansta, kullanıcı dostu mobil uygulamalar tasarlıyoruz." 
                  english="We design user-friendly mobile applications with native performance for iOS and Android." 
                />
              </p>
            </CardContent>
          </Card>

          <!-- Blockchain Kartı -->
          <Card class="shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
            <div class="relative h-48 overflow-hidden">
              <img src="/images/icons/social/blockchain1.webp" alt="Blockchain Teknolojileri" 
                  class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0">
              <img src="/images/icons/social/blockchain2.webp" alt="Blockchain Teknolojileri" 
                  class="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            </div>
            <CardHeader>
              <CardTitle>
                <TranslatedText 
                  turkish="Blockchain Teknolojileri" 
                  english="Blockchain" 
                />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                <TranslatedText 
                  turkish="Güvenli ve şeffaf blockchain tabanlı çözümlerle işletmenizi geleceğe hazırlıyoruz." 
                  english="We prepare your business for the future with secure and transparent blockchain-based solutions." 
                />
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    <!-- Teknolojiler Bölümü -->
    <div id="teknolojiler" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div ref="tech" class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            <TranslatedText 
              turkish="Kullandığımız Teknolojiler" 
              english="Technologies We Use" 
            />
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            <TranslatedText 
              turkish="En son teknolojileri kullanarak projelerinizi hayata geçiriyoruz" 
              english="We bring your projects to life using the latest technologies" 
            />
          </p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <div class="flex flex-col items-center">
            <img src="/images/icons/social/vue.svg" alt="Vue" class="w-16 h-16 mb-2">
            <span class="text-sm font-medium">Vue.js</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/icons/social/react.svg" alt="React" class="w-16 h-16 mb-2">
            <span class="text-sm font-medium">React</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/icons/social/node_js.svg" alt="Node.js" class="w-16 h-16 mb-2">
            <span class="text-sm font-medium">Node.js</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/icons/social/android.svg" alt="Android" class="w-16 h-16 mb-2">
            <span class="text-sm font-medium">Android</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/icons/social/ios.svg" alt="iOS" class="w-16 h-16 mb-2">
            <span class="text-sm font-medium">iOS</span>
          </div>
          <div class="flex flex-col items-center">
            <img src="/images/icons/social/figma.svg" alt="Figma" class="w-16 h-16 mb-2">
            <span class="text-sm font-medium">Figma</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Hakkımızda Bölümü -->
    <div id="hakkimizda" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div ref="about" class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <div class="w-full h-auto rounded-lg shadow-xl overflow-hidden">
              <img src="/images/team.svg" alt="AnadoluData Ekibi" class="w-full h-auto">
            </div>
          </div>
          <div class="md:w-1/2 space-y-6">
            <h2 class="text-3xl font-bold">
              <TranslatedText 
                turkish="Vizyonumuz" 
                english="Our Vision" 
              />
            </h2>
            <p class="text-lg text-gray-600">
              <TranslatedText 
                turkish="Anadolu'nun teknoloji potansiyelini dünyaya taşıyoruz. İşletmelerin dijital dönüşümüne öncülük ederek, yenilikçi çözümlerle müşterilerimizin başarılarına katkıda bulunuyoruz." 
                english="We carry Anatolia's technology potential to the world. By pioneering digital transformation of businesses, we contribute to our customers' success with innovative solutions." 
              />
            </p>
            <Button variant="outline" class="border-anadolu-teal text-anadolu-teal hover:bg-anadolu-teal/10" @click="acTeklifModal">
              <TranslatedText 
                turkish="Teklif Al" 
                english="Get Quo." 
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <!-- İletişim Bölümü -->
    <div id="iletisim" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div ref="contact" class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">
            <TranslatedText 
              turkish="Bize Ulaşın" 
              english="Contact Us" 
            />
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            <TranslatedText 
              turkish="Projeleriniz için bizimle iletişime geçin" 
              english="Get in touch with us for your projects" 
            />
          </p>
        </div>
        
        <div class="max-w-lg mx-auto">
          <Card>
            <CardContent class="pt-6">
              <form class="space-y-4" @submit.prevent="gonderFormu">
                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="ad-input" class="text-sm font-medium">
                      <TranslatedText turkish="Ad" english="Name" /> <span class="text-red-500">*</span>
                    </label>
                    <input 
                      id="ad-input"
                      type="text" 
                      class="w-full p-2 border rounded" 
                      v-model="formData.ad"
                      maxlength="50"
                      :placeholder="language === 'tr' ? 'Adınız' : 'Your first name'"
                      required 
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="soyad-input" class="text-sm font-medium">
                      <TranslatedText turkish="Soyad" english="L-N" /> <span class="text-red-500">*</span>
                    </label>
                    <input 
                      id="soyad-input"
                      type="text" 
                      class="w-full p-2 border rounded" 
                      v-model="formData.soyad"
                      maxlength="50"
                      :placeholder="language === 'tr' ? 'Soyadınız' : 'Your last name'"
                      required 
                    />
                  </div>
                </div>
                <div class="space-y-2">
                  <label for="email-input" class="text-sm font-medium">
                    <TranslatedText turkish="E-posta" english="Email" /> <span class="text-red-500">*</span>
                  </label>
                  <input 
                    id="email-input"
                    type="email" 
                    class="w-full p-2 border rounded" 
                    v-model="formData.email"
                    maxlength="100"
                    :placeholder="language === 'tr' ? 'E-posta adresiniz' : 'Your email address'"
                    required 
                  />
                </div>
                <div class="space-y-2">
                  <label for="telefon-input" class="text-sm font-medium">
                    <TranslatedText turkish="Telefon" english="Phone" />
                  </label>
                  <input 
                    id="telefon-input"
                    type="tel" 
                    class="w-full p-2 border rounded" 
                    v-model="formData.telefon"
                    maxlength="20"
                    :placeholder="language === 'tr' ? 'Telefon numaranız' : 'Your phone number'"
                  />
                </div>
                <div class="space-y-2">
                  <label for="mesaj-input" class="text-sm font-medium">
                    <TranslatedText turkish="Mesaj" english="Message" /> <span class="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="mesaj-input"
                    rows="4" 
                    class="w-full p-2 border rounded"
                    v-model="formData.mesaj"
                    maxlength="300"
                    :placeholder="language === 'tr' ? 'Mesajınız...' : 'Your message...'"
                    required
                  ></textarea>
                  <div class="text-xs text-gray-500 flex justify-between">
                    <span>
                      <TranslatedText 
                        turkish="Kalan karakter:" 
                        english="Left:" 
                      /> {{ 300 - formData.mesaj.length }}
                    </span>
                    <span>
                      <TranslatedText 
                        turkish="Maksimum 300 karakter" 
                        english="Max. 300 characters" 
                      />
                    </span>
                  </div>
                </div>
                <Button 
                  class="w-full bg-anadolu-teal hover:bg-anadolu-teal/90 text-white"
                  type="submit" 
                  :disabled="formGonderiliyor"
                >
                  <TranslatedText 
                    turkish="Gönder" 
                    english="Send" 
                    v-if="!formGonderiliyor"
                  />
                  <TranslatedText 
                    turkish="Gönderiliyor..." 
                    english="Sending..." 
                    v-else
                  />
                </Button>

                <!-- Form gönderim durumu -->
                <div v-if="formDurumu" class="mt-4 p-3 rounded" :class="formDurumu.basarili ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
                  <TranslatedText 
                    :turkish="formDurumu.mesajTR" 
                    :english="formDurumu.mesajEN" 
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-anadolu-navy text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Logo ve Açıklama -->
          <div>
            <div class="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="AnadoluData Logo" class="h-8 w-auto">
              <h3 class="text-xl font-bold text-anadolu-beige">AnadoluData</h3>
            </div>
            <p class="text-gray-300">
              <TranslatedText 
                turkish="Modern teknoloji ve bütçe dostu çözümler" 
                english="Modern and budget-friendly solutions" 
              />
            </p>

            <!-- Sosyal Medya Linkleri -->
            <ClientOnly>
            <div class="flex flex-row flex-nowrap items-center gap-4 mt-4">

              <a
                href="https://instagram.com/anadoludata"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-anadolu-beige/20 transition-colors"
                :title="language === 'tr' ? 'Instagram\'da AnadoluData' : 'AnadoluData on Instagram'"
                :aria-label="language === 'tr' ? 'Instagram\'da AnadoluData' : 'AnadoluData on Instagram'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="w-6 h-6 text-white"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://twitter.com/anadoludata"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-anadolu-beige/20 transition-colors"
                :title="language === 'tr' ? 'Twitter\'da AnadoluData' : 'AnadoluData on Twitter'"
                :aria-label="language === 'tr' ? 'Twitter\'da AnadoluData' : 'AnadoluData on Twitter'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="w-6 h-6 text-white"
                >
                  <path d="M13.8645 10.4686L21.161 2H19.432L13.0965 9.35325L8.03629 2H2.19995L9.85189 13.1193L2.19995 22H3.92915L10.6197 14.2348L15.9636 22H21.8L13.8643 10.4686H13.8648H13.8645ZM11.4962 13.2172L10.7208 12.11L4.55209 3.29961H7.20787L12.1862 10.4099L12.9616 11.517L19.4328 20.7593H16.777L11.4963 13.2175V13.217L11.4962 13.2172Z" />
                </svg>
              </a>

              <a
                href="https://github.com/anadoludata"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-full hover:bg-anadolu-beige/20 transition-colors"
                :title="language === 'tr' ? 'GitHub\'da AnadoluData' : 'AnadoluData on GitHub'"
                :aria-label="language === 'tr' ? 'GitHub\'da AnadoluData' : 'AnadoluData on GitHub'"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                  fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="w-6 h-6 text-white"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
                        5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5
                        4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
               </a>
            </div>
          </ClientOnly>
          </div>

          <!-- Hizmetler -->
          <div>
            <h4 class="font-bold mb-4 text-anadolu-beige">
              <TranslatedText 
                turkish="Hizmetler" 
                english="Services" 
              />
            </h4>
            <ul class="space-y-2">
              <li>
                <a href="#hizmetler" class="hover:text-anadolu-beige transition-colors" @click.prevent="kaydirSectionIcin('hizmetler')">
                  <TranslatedText 
                    turkish="Web Geliştirme" 
                    english="Web Devs" 
                  />
                </a>
              </li>
              <li>
                <a href="#hizmetler" class="hover:text-anadolu-beige transition-colors" @click.prevent="kaydirSectionIcin('hizmetler')">
                  <TranslatedText 
                    turkish="Mobil Uygulamalar" 
                    english="Mobile Apps" 
                  />
                </a>
              </li>
              <li>
                <a href="#hizmetler" class="hover:text-anadolu-beige transition-colors" @click.prevent="kaydirSectionIcin('hizmetler')">
                  <TranslatedText 
                    turkish="Blockchain" 
                    english="Blockchain" 
                  />
                </a>
              </li>
              <li>
                <a href="#hizmetler" class="hover:text-anadolu-beige transition-colors" @click.prevent="kaydirSectionIcin('hizmetler')">
                  <TranslatedText 
                    turkish="CRM Çözümleri" 
                    english="CRM Solutions" 
                  />
                </a>
              </li>
            </ul>
          </div>

          <!-- İletişim -->
          <div>
            <h4 class="font-bold mb-4 text-anadolu-beige">
              <TranslatedText 
                turkish="İletişim" 
                english="Contact" 
              />
            </h4>
            <ul class="space-y-2">
              <li>bilgi@anadoludata.com</li>
              <li>
                <TranslatedText 
                  turkish="İstanbul, Türkiye" 
                  english="Istanbul, Turkey" 
                />
              </li>
              <li>
                <a href="/gizlilik" class="hover:text-anadolu-beige transition-colors">
                  <TranslatedText 
                    turkish="Gizlilik Politikası" 
                    english="Privacy Policy" 
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Alt Bilgi -->
        <div class="border-t border-anadolu-teal/20 mt-8 pt-8 text-center text-gray-400">
          <p>
            <TranslatedText 
              turkish="© 2025 AnadoluData. Tüm hakları saklıdır." 
              english="© 2025 AnadoluData. All rights reserved." 
            />
          </p>
        </div>
      </div>
    </footer>
    
    <!-- Teklif Modal -->
    <TeklifModal v-model="teklifModalAcik" />
    
    <!-- ScrollToTop Butonu -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import TeklifModal from '@/components/TeklifModal.vue'
import NavBar from '@/components/NavBar.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import TranslatedText from '@/components/TranslatedText.vue'
import { useLanguage } from '@/composables/useLanguage'
import { useRuntimeConfig } from '#app'

const hero = ref(null)
const features = ref(null)
const tech = ref(null)
const about = ref(null)
const contact = ref(null)

// Dil durumunu yakala
const { language } = useLanguage()

// Teklif modal durumu
const teklifModalAcik = ref(false)

// Teklif modalını açma fonksiyonu
const acTeklifModal = () => {
  teklifModalAcik.value = true;
}

const formData = ref({
  ad: '',
  soyad: '',
  email: '',
  telefon: '',
  mesaj: ''
});

const formGonderiliyor = ref(false);
const formDurumu = ref(null);

// Düzeltilmiş kaydırma fonksiyonu
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

const gonderFormu = async () => {
  formGonderiliyor.value = true;
  
  try {
    const { apiBase } = useRuntimeConfig().public;
    
    // Sunucuya gönder
    const response = await fetch(`${apiBase}/iletisim`, {
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
      mesaj: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    };
    
    // Formu temizle
    formData.value = {
      ad: '',
      soyad: '',
      email: '',
      telefon: '',
      mesaj: ''
    };
  } catch (error) {
    // Hata durumu
    formDurumu.value = {
      basarili: false,
      mesaj: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
    };
    console.error('Form gönderim hatası:', error);
  } finally {
    formGonderiliyor.value = false;
  }
};

//onMounted(() => {
//  useMotion(hero, {
//  initial: { opacity: 0, y: 100 },
//    enter: { 
//      opacity: 1, 
//      y: 0,
//      transition: { duration: 800 }
//    }
//  })

  useMotion(features, {
    initial: { opacity: 0, scale: 0.9 },
    enter: { 
      opacity: 1,
      scale: 1,
      transition: { delay: 200, duration: 600 }
    },
    visibleOnce: true
  })

  useMotion(tech, {
    initial: { opacity: 0 },
    enter: { 
      opacity: 1,
      transition: { delay: 300, duration: 800, staggerChildren: 0.1 }
    },
    visibleOnce: true
  })

  useMotion(about, {
    initial: { opacity: 0, x: -50 },
    enter: { 
      opacity: 1,
      x: 0,
      transition: { delay: 200, duration: 800 }
    },
    visibleOnce: true
  })

  useMotion(contact, {
    initial: { opacity: 0, y: 50 },
    enter: { 
      opacity: 1,
      y: 0,
      transition: { delay: 200, duration: 600 }
    },
    visibleOnce: true
  })

</script>
