import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

import { getMessages, createMessage } from './controllers/messageController';

app.post(`/api/messages`, createMessage);

app.listen(4004, () => console.log(`running on 4004`));
