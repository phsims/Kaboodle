import { z } from 'zod';

export const EventSchema = z.object({
    eventID: z.string().nonempty(),
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    location: z.string().nonempty(),
    date: z.string().nonempty(),
    organizer: z.string().nonempty(),
    ticketTypes: z.array(z.string()).nonempty(),
});


export type Event = z.infer<typeof EventSchema>;

