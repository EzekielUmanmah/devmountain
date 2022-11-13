// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

const arr = [28, 43, -13, 30, 4, 0, 12, -4];

function addToZero(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      if (a[i] + a[j] === 0 && i !== j) {
        console.log(true, a[i], a[j]);
        return;
      }
    }
  }
  console.log(false);
}

addToZero(arr);

// const a = [1, 4, 11, 2, 37, -4];

// for (let i = 0; i < a.length; i++) {
//   const curr = a[i];

//   for (let j = 0; j < a.length; j++) {
//     if (a.indexOf(curr) !== j && curr === a[j]) {
//       console.log(true, curr, a[j]);
//       return;
//     }
//   }
//   console.log(false);
// }
