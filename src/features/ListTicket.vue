<template>
  <div class="mx-auto px-10 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-10">
    <Ticket v-for="ticket in tickets" :key="ticket.id" :ticket="ticket" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Ticket as TicketType } from '../Type';
import Ticket from './Ticket.vue';
import { getTickets } from '@/services/TicketService';

export default defineComponent({
  components: { Ticket },
  setup() {
    const tickets = ref([] as TicketType[]);

    onMounted(async () => {
      tickets.value = await getTickets();
    });

    return { tickets };
  },
});
</script>
