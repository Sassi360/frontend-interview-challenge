<template>
  <div class="mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
    <div v-if="loading">Loading...</div>
    <div v-else-if="tickets.length === 0 && !loading">No tickets available</div>
    <TicketCard v-else v-for="ticket in filteredTickets" :key="ticket.id" :ticket="ticket" />
  </div>
</template>

<script setup lang="ts">
import { Ticket } from '@/Type';
import { computed, defineProps, onMounted, ref } from 'vue';
import { getTickets } from '../services/TicketService';
import { default as TicketCard } from './Ticket.vue';

const loading = ref(true);
const tickets = ref([] as Ticket[]);


onMounted(async () => {
  try {
    tickets.value = await getTickets();
  } catch (error) {
    console.error('Failed to fetch tickets:', error);
  } finally {
    loading.value = false;
  }
});

const props = defineProps({
  creator: String,
});

const filteredTickets = computed(() => {
  return tickets.value.filter(ticket => ticket.creator === props.creator);
});
</script>
