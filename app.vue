<!-- app.vue -->
<template>
  <div class="min-h-screen bg-background font-sans antialiased">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>