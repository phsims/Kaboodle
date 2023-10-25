
import { Typography, Card, CardContent } from "@mui/material";

import EventsForm from 'events/components/EventsForm/EventsForm';
import Link from "next/link";


export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <>
      <div id="welcome">
        <Typography variant='h1'> Hello there, Welcome to events 👋</Typography>
      </div>
      <Card className="shadow" variant="outlined">
        <CardContent>
          <Link href='/events' className="card-link"><Typography variant="h2" color={'#1976d2'}>See all events</Typography></Link>
          <EventsForm />
        </CardContent>

      </Card>
    </>
  );
}

export default Index;
