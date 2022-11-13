// Given a word, return true if that word contains only unique characters. Return false otherwise.

// For example:

// hasUniqueChars("Monday")

// function hasUniqueChars(str) {
//   const set = new Set(str);
//   console.log(set.size, str.length);
// }

// hasUniqueChars('MooMnday');

function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    // for (let j = 0; j < str.length; j++) {
    //   if (str[i] !== str[j]) continue;
    // }
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) continue;
    else return false;
  }
  return true;
}

console.log(hasUniqueChars('Mondaym'));
