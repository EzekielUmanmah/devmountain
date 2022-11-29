// Given a string, return true or false depending on whether that string has balanced parentheses.
// For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks,
// like curly brackets, square brackets, or angle brackets.

// Sample Strings
let sample1 = 'This ( is unbalanced.';
let sample2 = '(This (is (a) balanced) string.)';
let sample3 = 'This is () also ) unbalanced.';
let sample4 = 'Balanced.';

// Write your solution below:

function equalParen(s) {
  let o = 0;
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') o++;
    else if (s[i] === ')') c++;
  }
  console.log(o === c);
}

equalParen(sample1);
equalParen(sample2);
equalParen(sample3);
equalParen(sample4);
