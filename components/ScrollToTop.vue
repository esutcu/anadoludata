<template>
  <Transition name="fade">
    <button 
      v-if="showButton" 
      @click="scrollToTop"
      aria-label="Yukarı Kaydır"
      class="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-anadolu-teal shadow-lg hover:bg-anadolu-teal/90 transition-all duration-300 hover:shadow-xl"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const checkScroll = () => {
  showButton.value = window.scrollY > (document.documentElement.scrollHeight * 0.3);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>