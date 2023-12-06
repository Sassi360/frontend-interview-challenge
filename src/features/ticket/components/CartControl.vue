<template>
  <div>
    <button v-if="!isInCart" @click="add">Add +</button>
    <button v-else @click="remove">Remove -</button>
  </div>
</template>

<script setup lang="ts">
import { Ticket } from '@/Type';
import { useCartStore } from '../store/index';
import { computed } from 'vue';

const props = defineProps<{ ticket: Ticket }>()
const store = useCartStore();

const isInCart = computed(() => {
  const ticket = store.cart.find(ticket => ticket.id === props.ticket.id)
  return !!ticket
})


function add() {
  store.add(props.ticket)
}
function remove() {
  store.remove(props.ticket.id)
}
</script>
