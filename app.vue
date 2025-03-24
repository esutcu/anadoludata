<!-- app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Lang attribute'u eklemek için useHead kullanımı
useHead({
  htmlAttrs: {
    lang: 'tr'
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>