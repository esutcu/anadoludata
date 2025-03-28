<template>
    <div class="translated-text-container">
      <div class="text-content" :class="{ 'flip': language === 'en' }">
        <div class="text-front">{{ turkish }}</div>
        <div class="text-back">{{ english }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useLanguage } from '~/composables/useLanguage'
  
  const props = defineProps({
    turkish: {
      type: String,
      required: true
    },
    english: {
      type: String,
      required: true
    }
  })
  
  const { language } = useLanguage()
  </script>
  
  <style scoped>
  .translated-text-container {
    position: relative;
    perspective: 1000px;
    display: inline-block;
  }
  
  .text-content {
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
  }
  
  .text-front, .text-back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  
  .text-front {
    transform: rotateY(0deg);
    position: relative;
  }
  
  .text-back {
    transform: rotateY(180deg);
  }
  
  .flip .text-front {
    transform: rotateY(180deg);
  }
  
  .flip .text-back {
    transform: rotateY(0deg);
  }
  </style>