// Write a function to remove all duplciate letters from a provided string.
// The string will only contail lowercase letters between a - z. The string will not contain spaces.

// One solution is to make a loop, check if char exists in arr, if not, push char into arr
// Another solution without a loop is to use reduce(), checking if prev != curr

function makeUnique(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) arr.push(s[i]);
  }
  arr = arr.join('');
  console.log(arr);
}

function makeUnique(s) {
  const arr = [];
  s.split('').filter((x) => !arr.includes(x) && arr.push(x));
  console.log(arr.join(''));
}

// For example:

makeUnique('helloworld');
// helowrd

makeUnique('iwanttoclimbamountain');
// iwantoclmbu
