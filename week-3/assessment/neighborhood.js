const resta = [
  'Wendys',
  'McDonalds',
  'Burger King',
  'Five Guys',
  'Pizza Hut',
  'Papa Johns',
  'Subway',
  'Quiznos',
  'Panda Express',
];

const randomBtn = document.querySelector('#random');
randomBtn.addEventListener('click', () => {
  const i = Math.floor(Math.random() * resta.length);
  alert(`You're in luck! Today you're eating at ${resta[i]}`);
});
