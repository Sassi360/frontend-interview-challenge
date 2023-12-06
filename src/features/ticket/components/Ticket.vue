<template>
  <div class="bg-gray-100 p-6 rounded-xl space-y-4">
    <h2 class="font-bold text-xl">{{ ticket.name }}</h2>
    <p class="text-gray-600 text-md line-clamp-4">{{ ticket.description }}</p>
    <p v-if="ticket.isVip">VIP</p>
    <div class="flex justify-between">
      <p><strong>Count: </strong> {{ ticket.count }}</p>
      <p><strong>Price: </strong> ${{ ticket.price }}</p>
    </div>
    <button v-if="allowDelete" @click="remove"
      class="inline-flex items-center text-sm font-semibold underline-offset-4 hover:underline text-red-600 hover:text-red-700">Delete
      Ticket</button>
  </div>
</template>

<script setup lang="ts">
import { Ticket } from '@/Type';
import { deleteTicket } from '@/services/TicketService';



const props = defineProps<{ ticket: Ticket, allowDelete?: boolean }>();
const emit = defineEmits(['remove']);

const remove = async () => {
  console.info('Deleting ticket:', props.ticket.name)
  await deleteTicket(props.ticket.id)
  emit("remove")
};
</script>
