import express from 'express';
import cors from 'cors';
import eventsController from './controllers/events.controller';
import ticketsController from './controllers/tickets.controller';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/api/events', eventsController);
app.use('/api/tickets', ticketsController);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
