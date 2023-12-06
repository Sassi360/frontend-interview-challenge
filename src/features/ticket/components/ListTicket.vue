<template>
  <div class="mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
    <div v-if="loading">Loading...</div>
    <div v-else-if="tickets.length === 0 && !loading">No tickets available</div>
    <TicketCard v-else v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" @remove="refresh"
      :allow-delete="admin" />
  </div>
</template>

<script setup lang="ts">
import { Ticket } from '@/Type';
import { defineProps, onMounted, ref } from 'vue';
import { default as TicketCard } from './Ticket.vue';
import { getTickets } from '@/services/TicketService';

const loading = ref(true);
const tickets = ref([] as Ticket[]);
defineProps<{ admin?: boolean }>();

async function refresh() {
  try {
    loading.value = true
    tickets.value = await getTickets();
  } catch (error) {
    console.error('Failed to fetch tickets:', error);
  } finally {
    loading.value = false;
  }
}

onMounted(refresh);



</script>
