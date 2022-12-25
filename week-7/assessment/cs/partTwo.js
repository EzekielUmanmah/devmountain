// Work through the following problems in Javascript (you have seen these problems before).
// Create a new file for your code. When you have finished with each function, leave a code
// comment with what you believe the runtime of your code to be.
const perf = require('execution-time')();

// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True
// if any two numberss in list sum to 0, and false otherwise.

function addToZero(a) {
  for (let i = 0; i < a.length; i++) {
    const n = a[i];

    for (let j = i; j < a.length; j++) {
      if (n + a[j] === 0) return true;
    }
  }
  return false;
}
// ***ANSWER**
// The runtime complexity is O(n^2) because of the nested loop. For every outer loop
// iteration, the nested loop, while starting at i, still needs to loop over the remaining array items.
// Space complexity: O(1)

// For example:
// perf.start();
// console.log(addToZero([])); // False
// let res = perf.stop();
// console.log(res.preciseWords);
// perf.start();
// console.log(addToZero([1])); // False
// res = perf.stop();
// console.log(res.preciseWords);
// perf.start();
// console.log(addToZero([1, 2, 3])); // False
// res = perf.stop();
// console.log(res.preciseWords);
// perf.start();
// console.log(addToZero([1, 2, 3, -2])); // True
// res = perf.stop();
// console.log(res.preciseWords);

// 2) Unique Characters
// Write a function that takes in a single word, as a string. It should return True
// if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(s) {
  const set = new Set(s);

  return set.size === s.length;
}

// **ANSWER**
// The time complexity is O(n) since Set must iterate over every value checking to see if it already exists
// in the set.
// Space complexity: O(n) because the size of set is determined by the input

// const x = 's'.repeat(1000);
// perf.start();
// console.log(hasUniqueChars(x)); // -> True
// let res = perf.stop();
// console.log(res.preciseWords);

// const y = 's'.repeat(1000000);
// perf.start();
// console.log(hasUniqueChars(y)); // -> True
// res = perf.stop();
// console.log(res.preciseWords);

// perf.start();
// console.log(hasUniqueChars('Monday')); // -> True
// res = perf.stop();
// console.log(res.preciseWords);

// perf.start();
// console.log(hasUniqueChars('Moonday')); // -> False
// res = perf.stop();
// console.log(res.preciseWords);

// 3) Pangram Sentence
// A pangram is a sentence that contains all the letters of the English alphabet at least once,
// like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(s) {
  const alpha = /[a-z]/g;

  const set = new Set(s.toLowerCase().match(alpha));

  return set.size === 26;
}

// **ANSWER**
// The overall time complexity remains O(n) and dependent on the size of the input.
// Space complexity: O(n)

// For example:
isPangram('The quick brown fox jumps over the lazy dog!'); // -> True
isPangram('I like cats, but not mice'); // -> False

// 4) Longest Word
// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(a) {
  let longest = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i].length > longest.length) longest = a[i];
  }
  console.log(longest);
  return longest;
}
// **ANSWER**
// This solution has a time complexity of O(n) because each item must be looked at once for comparison
// and as the input grows the number of operations grows linearly.
// Space complexity: O(1)

// For example:
findLongestWord(['hi', 'hello']); // -> 5
