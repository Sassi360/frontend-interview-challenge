<template>
  <form @submit.prevent="submit" class="max-w-6xl grid grid-cols-1 sm:grid-cols-2 mx-auto gap-6">
    <div class="space-y-5">
      <Input v-model="ticket.name" placeholder="Ticket Name" label="Ticket Name" type="text" />
      <Input v-model="ticket.count" placeholder="Ticket Count" label="Number of ticket" type="number" />
      <Input v-model="ticket.price" placeholder="Ticket Price" label="Cost of ticket" type="number" />
    </div>
    <div class="space-y-4">
      <Input v-model="ticket.description" placeholder="Ticket Description" label="Ticket Description" />
      <Checkbox v-model="ticket.isVip" label="Does the ticket in question qualify as a VIP ticket?" />
    </div>



    <div class="space-y-5">
      <div>
        <button type="submit"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700">Add
          Ticket</button>
      </div>
    </div>

  </form>
</template>

<script lang="ts">
import Checkbox from '@/components/Checkbox.vue';
import Input from '@/components/Input.vue';
import { createTicket } from '@/services/TicketService';
import { defineComponent, ref } from 'vue';
import { Ticket } from '../Type';


export default defineComponent({
  setup() {
    const ticket = ref({} as Ticket);
    const submit = async () => {
      await createTicket(ticket.value);
      console.log(ticket.value);
    };
    return { ticket, submit };
  },
  components: { Input, Checkbox }
});
</script>
