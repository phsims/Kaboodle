import * as express from 'express';
import * as fs from 'fs/promises';
import * as path from 'path';


const ticketsController = express.Router();

const TICKETS_FILE = path.join(__dirname, '../assets/tickets.json');

ticketsController.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(TICKETS_FILE, 'utf8');
        const tickets = JSON.parse(data);
        res.json(tickets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to read data' });
    }
});



export default ticketsController;
