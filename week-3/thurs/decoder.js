// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.
// Start by creating a function called decoder that has a single parameter called code.
// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).
// Each number tells you how many characters to skip before finding a good letter. After each good letter should come
// the next next number.
// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2,
// find the ‘e’, skip 5, find the ‘y’.
// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// function decoder(code) {
//   let str = '';

//   for (let i = 0; i < code.length; i++) {
//     if (!isNaN(code[i])) {
//       str += code[i + parseInt(code[i]) + 1];
//     }
//   }
//   console.log(str);
//   return str;
// }

// Optimized solution after looking at solution
function decoder(code) {
  let str = '';

  for (let i = 0; i < code.length; i++) {
    if (!isNaN(code[i])) {
      str += code[i + parseInt(code[i]) + 1];
      // change i so that it only iterates on numbers
      i += parseInt(code[i]) + 1;
    }
  }
  console.log(str);
  return str;
}

decoder('0h2xce5ngbrdy');
decoder('3vdfn');
decoder('0r');
decoder('2bna0p1mp2osl0e');
decoder('0y4akjfe0s');
