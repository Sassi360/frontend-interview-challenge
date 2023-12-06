<template>
  <header class="p-5 text-lg text-center bg-green-50">
    Welcome to Auctria's technical interview. Feel free to remove this component and start coding!
  </header>

  <div class="max-w-6xl mx-auto px-6 ">
    <Navigation />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue';
</script>
