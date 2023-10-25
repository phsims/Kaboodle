import { z } from 'zod';

export const TicketSchema = z.object({
    TicketTypeID: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    eventID: z.string(),
});
export type Ticket = z.infer<typeof TicketSchema>;
