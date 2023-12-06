<template>
  <div class="mx-auto px-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
    <div v-if="loading">Loading...</div>
    <div v-else-if="tickets.length === 0 && !loading">No tickets available</div>
    <Ticket v-else v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import Ticket from './Ticket.vue';
import { useTicketsStore } from '@/store/index';

const store = useTicketsStore();
const loading = ref(true);

const tickets = computed(() => store.tickets);

onMounted(async () => {
  try {
    await store.fetchTickets();
  } catch (error) {
    console.error('Failed to fetch tickets:', error);
  } finally {
    loading.value = false;
  }
});
</script>
