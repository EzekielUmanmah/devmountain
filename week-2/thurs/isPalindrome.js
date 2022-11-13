let word = 'racecars';
// let reverse = ''
// for (let i = 0; i < word.length; i++) {
//   for (let j = word.length - 1; j >= 0; j--) {
//     if (word[i] != word[j]) {
//       console.log(word[i], word[j]);
//       return false;
//     }
//   }
//   console.log(true);
//   return true;
// }

function isPalindrome(str) {
  let reversed = str.split('').reverse();
  reversed = reversed.join('');
  if (reversed === str) return true;
  return false;
  // console.log(reversed, str);
  // for (let i = 0; i < word.length; i++) {
  //   if (reversed[i] !== str[i]) return false;
  // }
  // return true;
}
console.log(isPalindrome(word));
