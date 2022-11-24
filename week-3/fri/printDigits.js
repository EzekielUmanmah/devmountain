// Write a function called printDigits that takes in one argument, num. When given an integer,
// the function should print (console.log) each digit in reverse order, starting with the ones
// place. Do not do this by just turning the number into a string and reversing it. Solve the
// problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

function printDigits(n) {
  while (n > 0) {
    const lastNum = n % 10;
    console.log(lastNum);
    n = Math.floor(n / 10);
  }
}

// printDigits(1);
// 1

printDigits(314);
// 4
// 1
// 3

// printDigits(12);
// 2
// 1
