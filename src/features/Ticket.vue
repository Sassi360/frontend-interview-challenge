<template>
  <div class="bg-gray-100 p-6 rounded-xl">
    <h2>{{ ticket.name }}</h2>
    <p>{{ ticket.description }}</p>
    <p>VIP: {{ ticket.isVip ? 'Yes' : 'No' }}</p>
    <p>Count: {{ ticket.count }}</p>
    <p>Price: {{ ticket.price }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Ticket } from '../Type';

export default defineComponent({
  props: {
    ticket: {
      type: Object as () => Ticket,
      required: true,
    },
  },
});
</script>
