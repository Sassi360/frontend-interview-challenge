import { getTickets } from '@/services/TicketService';
import { defineStore } from 'pinia';
import { Ticket as TicketType } from '../Type';

export const useTicketsStore = defineStore({
  id: 'tickets',
  state: () => ({
    tickets: [] as TicketType[],
  }),
  persist: true,
  actions: {
    async fetchTickets() {
      this.tickets = await getTickets();
    },
    addTicket(ticket: TicketType) {
      this.tickets.push(ticket);
    },
    deleteTicket(id: string) {
      this.tickets = this.tickets.filter(ticket => ticket.id !== id);
    },
  }
});
