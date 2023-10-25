import { Grid, Typography, Card, CardContent, Chip, Link } from "@mui/material";
import { Event } from "events/models/events-model"
import { format, parseISO } from 'date-fns';



export interface EventsProps {
  events: Array<Event>
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/events`)
  const events = await res.json()

  return { props: { events } }
}

export function Events({ events }: EventsProps) {
  return (
    <Grid container spacing={2} >
      {
        events.map(({ name, description, location, date, organizer, ticketTypes, eventID }, index) => {
          const dateString = format(parseISO(date), "dd-MM-yyyy")

          return (
            <Grid key={index} item xs={4} marginTop={2} >
              <Link href={`/events/${eventID}`} className='card-link'>
                <Card variant="outlined"  >
                  <CardContent>
                    <Typography variant='h5'>{name}</Typography>
                    <Typography variant='subtitle1'>{dateString}</Typography>
                    <Typography variant='subtitle2'>{location} - {organizer}</Typography>
                    <Typography variant='body1'>{description.substring(0, 25)}</Typography>

                    {ticketTypes.map((type, index) => {
                      return (
                        <Chip label={type} key={index} />
                      )
                    })}

                  </CardContent>
                </Card>
              </Link>
            </Grid>
          )
        })
      }
    </Grid >
  );
}


export default Events;
