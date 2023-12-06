import { defineStore } from 'pinia';
import { Ticket as TicketType } from '../Type';
import { getTickets } from '@/services/TicketService';

export const useTicketsStore = defineStore({
  id: 'tickets',
  state: () => ({
    tickets: [] as TicketType[],
  }),
  actions: {
    async fetchTickets() {
      this.tickets = await getTickets();
    },
    addTicket(ticket: TicketType) {
      this.tickets.push(ticket);
    },
    deleteTicket(id: string) {
      this.tickets = this.tickets.filter(ticket => ticket.id !== id);
    }
  }
});
