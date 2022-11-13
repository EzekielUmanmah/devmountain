let str = 'AJCJC | LZPD-LDYFDZIIPQF | ZEWPBYD ICCUPQFB | ICBBZFC PQBUDJKUYD YD ICQUYD';
str = str.split('')

for (let i = 0; i < str.length; i++){
  if(str[i] === 'A'){
    str[i] = 'Q'
  }
  else if(str[i] === 'W'){
    str[i] = 'V'
  }
  else if(str[i] === 'E'){
    str[i] = 'D'
  }
  else if(str[i] === 'F'){
    str[i] = 'G'
  }
  else if(str[i] === 'Z'){
    str[i] = 'A'
  }
  else if(str[i] === 'K'){
    str[i] = 'C'
  }
  else if(str[i] === 'B'){
    str[i] = 'S'
  }
  else if(str[i] === 'P'){
    str[i] = 'I'
  }
  else if(str[i] === 'U'){
    str[i] = 'T'
  }
  else if(str[i] === 'D'){
    str[i] = 'R'
  }
  else if(str[i] === 'C'){
    str[i] = 'E'
  }
  else if(str[i] === 'I'){
    str[i] = 'M'
  }
  else if(str[i] === 'L'){
    str[i] = 'P'
  }
  else if(str[i] === 'Q'){
    str[i] = 'N'
  }
  else if(str[i] === 'Y'){
    str[i] = 'O'
  }
  else if(str[i] === 'J'){
    str[i] = 'U'
  }
  // Keep blanks
  else if(str[i] === ' '){
    str[i] = str[i]
  }
}

console.log(str.join(''))