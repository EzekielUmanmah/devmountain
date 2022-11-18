console.log('hello world');

function handleSubmit(evt) {
  evt.preventDefault();

  alert('form submit');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const duck = document.querySelector('img');
duck.addEventListener('mouseover', () => alert(`You're a great person!`));
