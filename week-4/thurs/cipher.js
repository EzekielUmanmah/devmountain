// Part 2 - Ciphers
// Open up a text editor and create your very own cipher. State all the logic behind your cipher.
// Then, using your cipher, encipher the phrase “I love cryptography!” Display the result. Using your cipher again,
// decipher the ciphered phrase. Do you get “I love cryptography!”?

// Take this one step further and create your cipher in code.

const alpha = 'abcdefghijklmnopqrstuvwxyz';
const reversed = 'zyxwvutsrqponmlkjihgfedcba'.split('');
// i olev xibkgltizksb
function cipher(s) {
  // The split string 's' should be stored in a new variable 'newStr' as in the loop I think
  // 's[i] = newVal' is referencing the original string 's', making reassignment impossible even
  // though 's' is reassigned to be an array of characters (need to check docs)
  let newStr = s.toLowerCase().split('');

  // In the outer loop, we need to iterate over every character in 's' and check each char
  // against the normal 'alpha', grab the inner loop index where a match is found, and reassign the 's'
  // value to the 'reversed' alphabet, instead of reassigning 's' to 'alpha'.
  for (let i = 0; i < newStr.length; i++) {
    // capture each value of 's' and compare against entire alphabet
    for (let j = 0; j < alpha.length; j++) {
      // if a match is found, we grab the index 'j' and use it to find the right value in the
      // reversed alphabet array
      // Reassigning newStr[i] = alpha[j] simply reassigns the same value
      if (newStr[i] === alpha[j]) {
        newStr[i] = reversed[j];
      }
    }
  }
  console.log(newStr.join(''));
}

cipher('I love cryptography');
// cipher('abcd');
