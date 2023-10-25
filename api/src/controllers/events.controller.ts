import * as express from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';
import { EventSchema } from '../schemas/EventSchema';
import { randomUUID } from 'crypto';

const eventsController = express.Router();

const EVENTS_FILE = path.join(__dirname, '../assets/events.json');

eventsController.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(EVENTS_FILE, 'utf8');
        const events = JSON.parse(data);
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to read data' });
    }
});

eventsController.get('/:id', async (req, res) => {
    try {
        const data = await fs.readFile(EVENTS_FILE, 'utf8');
        const events = JSON.parse(data);

        const eventId = req.params.id;

        const event = events.find((e) => e.eventID === eventId);

        if (event) {
            res.json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to read data' });
    }
});


eventsController.post('/', express.json(), async (req, res) => {
    console.log('thibf', req)
    try {
        const id = randomUUID()
        const data = await fs.readFile(EVENTS_FILE, 'utf8');
        const events = JSON.parse(data);
        const newEvent = EventSchema.parse({ eventID: id, ...req.body });
        events.push(newEvent);
        await fs.writeFile(EVENTS_FILE, JSON.stringify(events, null, 2));
        res.json(newEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to write data' });
    }
});


export default eventsController;
