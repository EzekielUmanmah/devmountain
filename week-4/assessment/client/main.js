const complimentBtn = document.getElementById('complimentButton');
const fortuneBtn = document.getElementById('fortune');

const baseURL = 'http://localhost:4000/api';

const getCompliment = () => {
  axios.get(`${baseURL}/compliment/`).then((res) => {
    const data = res.data;
    alert(data);
  });
};
complimentBtn.addEventListener('click', getCompliment);

const getFortune = () => {
  axios.get(`${baseURL}/fortune`).then((res) => alert(res.data));
};
fortuneBtn.addEventListener('click', getFortune);

// MAGIC 8 BALL GET/PUT/POST/DELETE

// alert one magic 8 ball msg
const magicBall = document.getElementById('magic');
const getMagicBall = () => {
  axios
    .get(`${baseURL}/ball`)
    .then((res) => alert(res.data))
    .catch((err) => console.log(err));
};
magicBall.addEventListener('click', getMagicBall);

// GET all messages in answers array
let container = document.getElementById('answerslist');
const allmsgsBtn = document.getElementById('allmsgs');

const getAllAnswers = () => {
  axios.get(`${baseURL}/ballmsgs`).then((data) => {
    const answers = data.data;
    container.innerHTML = '';
    answers.map((x, i) => {
      const item = document.createElement('div');

      item.innerHTML = `<p>${x}</p>
      <button onclick="deleteAnswer(${i});">Delete</button>
      <button onclick="updateAnswer(${i}, '${x}');">Change Message</button>
      `;
      container.append(item);
    });
  });
};
allmsgsBtn.addEventListener('click', getAllAnswers);

// POST add new answer
// prettier-ignore
const newAnswerBtn = document.getElementById('answer').addEventListener('click', addAnswerHandler);

function addAnswerHandler(e) {
  e.preventDefault();

  const newAnswer = document.getElementById('newAnswer').value;
  addNewAnswer({ newAnswer });
}

const addNewAnswer = (newAnswer) => {
  axios.post(`${baseURL}/ball`, newAnswer).then(() => {
    document.getElementById('newAnswer').value = '';

    container.innerHTML = '';
    const item = document.createElement('div');
    item.innerHTML = `<p>You added a new Magic 8 Ball message: <strong>${newAnswer.newAnswer}</strong></p>`;
    container.append(item);
  });
};

// DELETE answer
function deleteAnswer(id) {
  axios.delete(`${baseURL}/ball/${id}`).then(() => getAllAnswers());
}

// UPDATE answer
// prettier-ignore
const update = document.getElementById('update').addEventListener('click', updateHandler);

let updateId;
// is passed id + msg to fill textarea
function updateAnswer(id, updateMsg) {
  const newAnswer = document.getElementById('newAnswer');
  // fill textarea with msg to change
  newAnswer.value = updateMsg;
  // assign id to outside scope for updateHandler
  updateId = id;
}

function updateHandler(e) {
  e.preventDefault();
  const updateMsg = document.getElementById('newAnswer').value;

  axios.put(`${baseURL}/ball/${updateId}`, { updateMsg }).then(() => {
    // cannot clear <textarea> via reassignment even if (let updateMsg)
    document.getElementById('newAnswer').value = '';
    getAllAnswers();
  });
}

// alert random msg on hovering pikachu
const pikachu = document.querySelector('img');
pikachu.addEventListener('mouseover', getQuote);

function getQuote() {
  axios.get(`${baseURL}/pikachu`).then((data) => alert(data.data));
}
