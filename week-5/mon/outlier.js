// You are given an array (which will have a length of at least 3, but could be very large) containing integers.
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a
// single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Check 1st 3 numbers => determines whether to return odd or even
function outlier(a) {
  let evens = 0;
  let odds = 0;

  a[0] % 2 === 0 ? evens++ : odds++;
  a[1] % 2 === 0 ? evens++ : odds++;
  a[2] % 2 === 0 ? evens++ : odds++;

  return evens > odds
    ? a.filter((n) => n % 2 !== 0)[0]
    : a.filter((n) => n % 2 === 0)[0];
}

const x = outlier([2, 4, 0, 100, 4, 11, 2602, 36]);
console.log(x);

const y = outlier([160, 3, 1719, 19, 11, 13, -21]);
console.log(y);
// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
