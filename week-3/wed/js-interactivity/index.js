const message = document.querySelector('#message');

function addMovie(e) {
  e.preventDefault();
  const inputField = document.querySelector('input');
  const movie = document.createElement('li');
  const movieTitle = document.createElement('span');
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener('click', crossOffMovie);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', deleteMovie);
  movie.appendChild(deleteBtn);

  document.querySelector('ul').appendChild(movie);
  inputField.value = '';
}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(e) {
  e.target.parentNode.remove();
  message.textContent = `${e.target.previousSibling.textContent} deleted!`;

  revealMessage();
}

function crossOffMovie(e) {
  e.target.classList.toggle('checked');

  e.target.classList.contains('checked')
    ? (message.textContent = `${e.target.textContent} watched!`)
    : (message.textContent = `${e.target.textContent} added back!`);

  revealMessage();
}

function revealMessage() {
  message.classList = '';

  setTimeout(() => {
    message.classList = 'hide';
  }, 1000);
}
