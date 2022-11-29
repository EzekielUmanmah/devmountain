import express from 'express';
import cors from 'cors';

import {
  getHouses,
  deleteHouse,
  createHouse,
  updateHouse,
} from './controllers.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the exercise server!'));

app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.delete('/api/houses/:id', deleteHouse);
app.put('/api/houses/:id', updateHouse);

const PORT = 4004;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
