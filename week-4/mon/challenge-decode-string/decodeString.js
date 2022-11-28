// In this challenge, you’ll write a decoder.

// Write a function that takes in a string and returns a string. A valid argument is a number followed by a
// sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:
// >>> "1a" // "b"
// >>> "3ce" // "fh"
// >>> "2fcjjm" // "hello"
// abcdefghi
function decoder(s) {
  let str = '';
  const n = parseInt(s[0]);
  for (let i = 1; i < s.length; i++) {
    // str += String.fromCharCode(s.codePointAt(i) + n);
    str += String.fromCharCode(s.charCodeAt(i) + n);
  }
  console.log(str);
}

decoder('1a');
decoder('3ce');
decoder('2fcjjm');
