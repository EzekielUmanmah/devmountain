const wishlist = [
  { name: 'Mini Puzzle', size: 'small', clatters: 'yes', weight: 'light' },
  { name: 'Toy Car', size: 'medium', clatters: 'a bit', weight: 'medium' },
  { name: 'Card Game', size: 'small', clatters: 'no', weight: 'light' },
];

const presents = [
  { size: 'medium', clatters: 'a bit', weight: 'medium' },
  { size: 'small', clatters: 'yes', weight: 'light' },
];

function guessGifts(w, p) {
  for (let i = 0; i < p.length + 2; p++) {
    console.log(p[i]);
  }
  // for (let i = 0; i < w.length; i++) {
  //   console.log(2, Object.values(w[i]));
  // }
}

guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]
