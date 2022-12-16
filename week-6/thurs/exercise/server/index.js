require('dotenv').config();
const express = require('express');
const cors = require('cors');
var Rollbar = require('rollbar');
const { PORT, ROLLBAR_KEY } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

// include and initialize the rollbar library with your access token
var rollbar = new Rollbar({
  accessToken: ROLLBAR_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

rollbar.log('Rollbar successfully implemented.');

const students = ['Jimmy', 'Timothy', 'Jimothy'];

app.get('/', (req, res) => {
  rollbar.info('Someone got a list of students!');
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.get('/api/students', (req, res) => {
  res.status(200).send(students);
});

app.get('/api/students/fail', (req, res) => {
  try {
    nasdf();
  } catch (error) {
    rollbar.error(error);
    console.log(error);
  }
});

app.post('/api/students', (req, res) => {
  let { name } = req.body;

  try {
    const index = students.findIndex((student) => {
      return student === name;
    });
    if (index === -1 && name !== '') {
      students.push(name);
      rollbar.info('Great! You added a student!');
      res.status(200).send(students);
    } else if (name === '') {
      rollbar.warning('Someone entered a blank student!');
      res.status(400).send('You must enter a name.');
    } else {
      rollbar.critical('Student already exists!');
      res.status(400).send('That student already exists.');
    }
  } catch (err) {
    rollbar.error(err);
    console.log(err);
  }
});

app.delete('/api/students/:index', (req, res) => {
  const targetIndex = +req.params.index;
  rollbar.critical(`Someone deleted ${students[targetIndex]}`);
  students.splice(targetIndex, 1);
  res.status(200).send(students);
});

app.get('/', (req, res) => res.send("You've reached the Exercise Lab Demo"));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
