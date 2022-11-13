// Write a function called hasMoreVowels that takes in one argument, word.
// When the function is called, return true if that word contains more vowels than non-vowels;
// otherwise, return false. The word will always be a single word, without any punctuation or spaces.
// It will contain only uppercase and/or lowercase letters.

function hasMoreVowels(word) {
  let vCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].match(/[aeiou]/i)) vCount++;
  }

  console.log(vCount, word.length, vCount > word.length - vCount);
  return vCount > word.length - vCount ? true : false;
}

hasMoreVowels('mice');
