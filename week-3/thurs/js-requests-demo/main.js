console.log('connected');

const getAllBtn = document.querySelector('#all');
const charBtns = document.querySelectorAll('.char-btns');
const ageForm = document.querySelector('#age-form');
const ageInput = document.querySelector('#age-input');
const charContainer = document.querySelector('section');

const baseURL = `http://localhost:4000`;

const getAllChars = () => {
  clearCharacters();
  axios
    .get(`${baseURL}/characters`)
    .then((res) => res.data.map((x) => createCharacterCard(x)))
    .catch((err) => console.log(err));
};

getAllBtn.addEventListener('click', getAllChars);

function createCharacterCard(char) {
  let charCard = document.createElement('div');
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`;

  charContainer.appendChild(charCard);
}

function clearCharacters() {
  charContainer.innerHTML = ``;
}

for (let i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener('click', (e) => {
    clearCharacters();
    axios
      .get(`${baseURL}/character/${e.target.id}`)
      .then((res) => createCharacterCard(res.data))
      .catch((err) => console.log(err));
  });
}

ageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  clearCharacters();
  axios
    .get(`${baseURL}/character?age=${e.target[0].value}`)
    .then((res) => res.data.map((char) => createCharacterCard(char)))
    .catch((err) => console.log(err));

  e.target[0].value = '';
});

const createForm = document.querySelector('#create-form');
const newFirstInput = document.querySelector('#first');
const newLastInput = document.querySelector('#last');
const newGenderDropDown = document.querySelector('select');
const newAgeInput = document.querySelector('#age');
const newLikesText = document.querySelector('textarea');

createForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newChar = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikesText.value.split(','),
  };

  axios
    .post(`${baseURL}/character`, newChar)
    .then((res) => res.data.map((char) => createCharacterCard(char)))
    .catch((err) => console.log(err));

  clearCharacters();
});
