<template>
  <div class="mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
    <div v-if="store.count === 0">No tickets available</div>
    <TicketCard v-for="ticket in store.cart" :key="ticket.id" :ticket="ticket" />
  </div>
</template>

<script setup lang="ts">
import { default as TicketCard } from './Ticket.vue';

import { useCartStore } from '../store/index';
const store = useCartStore();

</script>
