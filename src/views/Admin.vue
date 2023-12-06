<template>
  <CreateTicket />
  <ListTicket admin />
</template>

<script lang="ts">
import CreateTicket from '@/features/ticket/components/CreateTicket.vue';
import ListTicket from '@/features/ticket/components/ListTicket.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CreateTicket,
    ListTicket
  }
})
</script>
