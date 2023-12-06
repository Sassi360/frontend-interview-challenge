import axios from "axios";
import { Ticket } from "../Type";

const baseUrl = 'https://656f7d1e6529ec1c6237f581.mockapi.io/tickets'

// Fetch Tickets
export const getTickets = async () => {
  const response = await axios.get(baseUrl)
  return response.data as Ticket[];
}

// Create ticket
export const createTicket = async (ticket: Ticket) => {
  const response = await axios.post(baseUrl, ticket)
  return response.data as Ticket;
}

// Delete Ticket
export const deleteTicket = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data as Ticket;
}
