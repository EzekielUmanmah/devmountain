const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const {
  getCompliment,
  getFortune,
  getMagicBall,
  addNewAnswer,
  deleteAnswer,
  updateAnswer,
  getBallMsgs,
  getPikachuQuote,
  getChooseQuote,
} = require('./controller');

app.get('/api/compliment', getCompliment);
app.get('/api/fortune', getFortune);

app.get('/api/ballmsgs', getBallMsgs);
app.get('/api/ball', getMagicBall);
app.post('/api/ball', addNewAnswer);
app.delete('/api/ball/:id', deleteAnswer);
app.put('/api/ball/:id', updateAnswer);

app.get('/api/pikachu', getPikachuQuote);

app.get('/api/choose/:choice', getChooseQuote);

app.listen(4000, () => console.log('Server running on 4000'));
