<template>
  <div class="bg-gray-100 p-6 rounded-xl space-y-4">
    <h2 class="font-bold text-xl">{{ ticket.name }}</h2>
    <p class="text-gray-600 text-md line-clamp-4">{{ ticket.description }}</p>
    <p v-if="ticket.isVip">VIP</p>
    <div class="flex justify-between">
      <p><strong>Count: </strong> {{ ticket.count }}</p>
      <p><strong>Price: </strong> ${{ ticket.price }}</p>
    </div>
    <button @click="deleteTicket"
      class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700">Delete
      Ticket</button>
  </div>
</template>

<script setup lang="ts">
import { Ticket } from '../Type';
import { useTicketsStore } from '@/store/index';

const ticketsStore = useTicketsStore();

const props = defineProps({
  ticket: {
    type: Object as () => Ticket,
    required: true,
  },
});

const deleteTicket = () => ticketsStore.deleteTicket(props.ticket.id);
</script>
