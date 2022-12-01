// Write a function that will take in a string containing only s, m, and l characters.
// Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function
// should return this pile of t-shirts sorted by small, then medium, then large. The above example
// would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string
// will also never contain any spaces.

function tshirtSorter(str) {
  let s = [],
    m = [],
    l = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 's') s.push('s');
    if (str[i] === 'm') m.push('m');
    if (str[i] === 'l') l.push('l');
  }
  console.log(s.concat(m, l).join(''));
}

tshirtSorter('lms');
// sml

tshirtSorter('smllms');
// ssmmll
