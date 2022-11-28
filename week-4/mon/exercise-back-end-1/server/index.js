import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Welcome to the exercise server!'));

app.get('/api/users', (req, res) => {
  let friends = ['Nitin', 'Eric', 'Jeddy', 'Cameron', 'Riley'];
  res.status(200).send(friends);
});

app.get('/weather/:temperature', (req, res) => {
  const { temperature } = req.params;
  res.status(200).send(`<h3>It was ${temperature} today!`);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => `Listening on port: ${PORT}`);
