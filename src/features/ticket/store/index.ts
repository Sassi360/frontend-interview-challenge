import { Ticket } from '@/Type';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cart = ref([] as Ticket[])
  const count = computed(() => cart.value.length)

  function add(ticket: Ticket) {
    if (!exists(ticket.id)) {
      cart.value.push(ticket);
    }
  }

  function remove(id: string) {
    cart.value = cart.value.filter(cart => cart.id !== id);
  }

  function exists(id: string) {
    const ticket = cart.value.find(ticket => ticket.id === id)
    return !!ticket
  }

  return { add, remove, cart, count }
})
