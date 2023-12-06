export interface Ticket {
  id: string;
  name: string;
  description: string;
  isVip: boolean;
  count: number;
  price: number;
  creator: string
}

export type CreateTicketDto = Omit<Ticket,"id">
