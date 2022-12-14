import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'));
// app.use(express.static(`${__dirname}`/public));

app.get('/', (_req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

app.listen(4000, () => console.log('Server live on port 4000.'));
