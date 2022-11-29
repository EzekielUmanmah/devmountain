import express from 'express';
import cors from 'cors';

import {
  getMovies,
  createMovie,
  deleteMovie,
  updateMovie,
} from './controllers.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>
  res.send(`You've reached the back-end-2-demo server!`)
);

app.get('/api/movies', getMovies);
app.post('/api/movies', createMovie);
app.delete('/api/movies/:id', deleteMovie);
app.put('/api/movies/:id', updateMovie);

const PORT = 4004;
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
