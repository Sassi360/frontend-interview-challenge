<template>
  <div class="flex gap-x-10 justify-center py-6">
    <router-link v-for="link in links" :key="link.name" :to="link.path">{{ link.name }}</router-link>
  </div>
</template>

<script setup lang="ts" >
import { defineProps } from 'vue';

interface Link {
  name: string;
  path: string;
}

defineProps<{
  links: Link[];
}>();

</script>
