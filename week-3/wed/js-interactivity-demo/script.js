let count = 0;

const counter = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');

const increment = () => {
  count++;
  counter.textContent = count;
};

const decrement = () => {
  count--;
  counter.textContent = count;
};

const reset = () => {
  count = 0;
  counter.textContent = 0;
};

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

const themeBtns = document.querySelectorAll('.theme-buttons');

for (let i = 0; i < themeBtns.length; i++) {
  themeBtns[i].addEventListener('click', selectTheme);
}

function selectTheme(e) {
  const theme = e.target.textContent;
  document.querySelector('body').className = theme;
  document.querySelector('main').className = theme;

  const buttons = document.querySelectorAll('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}
