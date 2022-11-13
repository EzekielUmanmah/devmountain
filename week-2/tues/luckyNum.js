// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive.
// (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

function random(max) {
  // return parseInt(Math.random() * (max - min) + min);
  // return Math.floor(Math.random() * (max + 1));
  max = Math.floor(max);
  return Math.floor(Math.random() * max + 1);
}

function luckyNum(n) {
  let arr = [];

  if (n > 10 || n < 0) {
    console.log('Enter a number between 1 and 10.');
    return;
  }
  // This solution only works for n <= 9
  while (arr.length <= n) {
    let temp = random(n);
    while (arr.includes(temp)) {
      temp = random(n);
    }
    arr.push(temp);
  }
  // arr.splice(0, 1);
  console.log(arr, arr.length);

  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // for (let i = 0; i < n; i++) {
  //   const idx = Math.floor(Math.random() * nums.length);
  //   const num = nums[idx];
  //   arr.push(num);
  //   nums.splice(idx, 1);
  // }
  // console.log(arr.length, arr);
}

luckyNum(10);
