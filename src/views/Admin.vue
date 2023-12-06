<template>
  <CreateTicket />
  <ListTicket />
</template>

<script lang="ts">
import CreateTicket from '@/features/CreateTicket.vue';
import ListTicket from '@/features/ListTicket.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    CreateTicket,
    ListTicket
  }
})
</script>
