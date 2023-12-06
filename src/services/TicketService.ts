import axios from "axios";
import { CreateTicketDto, Ticket } from "../Type";

const baseURL = 'https://656f7d1e6529ec1c6237f581.mockapi.io/tickets'

const transport = axios.create({
  baseURL,
});


// Fetch Tickets
export const getTickets = async () => {
  const response = await transport.get<Ticket[]>('/')
  return response.data;
}

// Create ticket
export const createTicket = async (ticket: CreateTicketDto) => {
  const payload = { ...ticket, id: crypto.randomUUID() } as Ticket

  const response = await transport.post<Ticket>('/', payload)
  return response.data;
}

// Delete Ticket
export const deleteTicket = async (id: string) => {
  const response = await transport.delete<Ticket>(`/${id}`)
  return response.data;
}
