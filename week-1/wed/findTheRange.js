// Given an array of numbers, write some code to loop through the array, and print out the smallest
// and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

const arr = [1, 4, 11, 2, 37, -4];

let smallest = arr[0];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) largest = arr[i];
  if (arr[i] < smallest) smallest = arr[i];
}

console.log(smallest, largest);
