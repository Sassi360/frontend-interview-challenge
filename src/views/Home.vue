<template>
  <ListTicket />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListTicket from '@/features/ticket/components/ListTicket.vue';

export default defineComponent({
  components: {
    ListTicket
  }
})
</script>
