<template>
  <form @submit.prevent="addTicket" class="max-w-6xl grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6">
    <div class="space-y-5">
      <Input v-model="ticket.name" placeholder="Ticket Name" label="Ticket Name" in="text" />
      <Input v-model="ticket.count" placeholder="Ticket Count" label="Number of ticket" type="number" />
      <Input v-model="ticket.price" placeholder="Ticket Price" label="Cost of ticket" type="number" />
    </div>
    <div class="space-y-4">
      <Input v-model="ticket.description" placeholder="Ticket Description" label="Ticket Description" />
      <Checkbox v-model="ticket.isVip" label="Does the ticket in question qualify as a VIP ticket?" />
    </div>
    <div class="space-y-5">
      <button type="submit"
        class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">
        Add Ticket
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import Checkbox from '@/components/Checkbox.vue';
import Input from '@/components/Input.vue';
import { reactive } from 'vue';
import { CreateTicketDto } from '../Type';
import { createTicket } from '../services/TicketService';

let ticket = reactive({} as CreateTicketDto);

const addTicket = async (e: Event) => {
  const form = e.target as HTMLFormElement

  // Ensure that all fields are filled out
  if (!ticket.name || !ticket.description || !ticket.count || !ticket.price) {
    alert('Please fill out all fields');
    return;
  }
  await createTicket(ticket)
  form.reset()
};
</script>
