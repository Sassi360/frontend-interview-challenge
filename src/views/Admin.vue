<template>
  <CreateTicket />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateTicket from '@/features/CreateTicket.vue';

export default defineComponent({
  components: {
    CreateTicket,
  }
})
</script>
