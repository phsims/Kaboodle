import type { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { format, parseISO } from 'date-fns';
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { Event } from 'events/models/events-model';
import { Ticket } from 'events/models/ticket-model';
import { getEvents, getEventById, getTickets } from 'events/lib/data';

interface IParams extends ParsedUrlQuery {
  id: string;
}

export interface EventsProps {
  event: Event
  tickets: Array<Ticket>
}

export function Events({ event, tickets }: EventsProps) {
  if (!event || !tickets) return (<p>something went wrong</p>)

  const { name = '', date = '', description = '', eventID = '' } = event

  const dateString = format(parseISO(date), "dd-MM-yyyy")

  const eventTickets = tickets.filter(ticket => ticket.eventID === eventID)


  return (
    <div className='box rounded shadow'>
      <Typography variant='h2'>{name}</Typography>
      <Typography variant='h4'>{dateString}</Typography>
      <Typography variant='body1'>{description}</Typography>


      <Grid container spacing={2}>
        {eventTickets?.map(({ name, price, bookingFee, noAvaliable }, index) => {
          return (
            <Grid key={index} item xs={6} marginTop={2} >
              <Card variant="outlined"  >
                <CardContent>
                  <Typography variant='h5'>{name}</Typography>
                  <Typography variant='h6'>£{price} each</Typography>

                  {noAvaliable >= 1 ? <Typography variant='body1'>{noAvaliable} tickets avaliable</Typography> : <Typography variant='body1'>Sold out</Typography>}
                  <Typography variant='body1'>£{bookingFee.toFixed(2)} booking fee</Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>

    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;

  const event = await getEventById(id)

  const tickets = await getTickets()

  return {
    props: {
      event: event,
      tickets: tickets
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {

  const events = await getEvents()

  return {
    paths: events?.map((data: Event) => ({
      params: { id: data.eventID },
    })),
    fallback: true,
  };
};

export default Events;
