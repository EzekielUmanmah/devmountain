const perf = require('execution-time')();

function doublerAppend(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.push(num);
  }
}

function doublerInsert(nums) {
  let new_nums = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2;
    new_nums.unshift(num);
  }
}

function getSizedArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(i);
  }
  return array;
}

// push | unshift
const tinyArray = getSizedArray(10);
//    157.5 μs | 64.5 μs
const smallArray = getSizedArray(100);
//    174.2 μs | 82.3 μs
const mediumArray = getSizedArray(1000);
//    240.8 μs | 319.8 μs
const largeArray = getSizedArray(10000);
//    938.8 μs | 15.4933 ms
const extraLargeArray = getSizedArray(100000);
// 1.8638976 s | 4.779 ms

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start(); // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop(); // Stops timer and save time results

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();

console.log('Results for the extraLargeArray');
console.log('insert', resultsInsert.preciseWords);
console.log('append', resultsAppend.preciseWords);
