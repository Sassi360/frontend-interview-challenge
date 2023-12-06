<template>
  <ListCart />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListCart from '@/features/ticket/components/ListCart.vue';

export default defineComponent({
  components: {
    ListCart
  }
})
</script>
