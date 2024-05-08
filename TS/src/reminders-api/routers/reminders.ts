import { Router } from 'express';
import Reminder from '../models/reminder';
import CreateReminderDTO from '../dtos/create-reminder';

const router = Router();
const reminders: Reminder[] = [];

router.get('/', (req, res) => {
    res.json(reminders);
})

router.post('/', (req, res) => {
    const { title } = req.body as CreateReminderDTO;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).send(reminder);
})

export default router;
