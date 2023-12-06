import { defineStore } from 'pinia';
import { Ticket as TicketType } from '../Type';

export const useTicketsStore = defineStore({
  id: 'tickets',
  state: () => ({
    cart: [] as TicketType[],
  }),
  persist: true,
  actions: {
    addTicket(ticket: TicketType) {
      this.tickets.push(ticket);
    },
    deleteTicket(id: string) {
      this.tickets = this.tickets.filter(ticket => ticket.id !== id);
    },
  }
});
