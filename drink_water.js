// | Oil     | O | 0.80
// | Alcohol | A | 0.87 |
// | Water   | W | 1.00 |
// | Honey   | H | 1.36 |

// {                             {
//     { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//     { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//     { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
//   }                             }
   



function separateLiquids(glass) {
  var result = [];
  for (let i = 0; i < glass.length; i++) {
    for (let j = 0; j < glass[i].length; j++) {
      if (glass[i][j] == "O") {
        result.push(glass[i][j]);
      }
    }
  }

  for (let i = 0; i < glass.length; i++) {
    for (let j = 0; j < glass[i].length; j++) {
      if (glass[i][j] == "A") {
        result.push(glass[i][j]);
      }
    }
  }

  for (let i = 0; i < glass.length; i++) {
    for (let j = 0; j < glass[i].length; j++) {
      if (glass[i][j] == "W") {
        result.push(glass[i][j]);
      }
    }
  }

  for (let i = 0; i < glass.length; i++) {
    for (let j = 0; j < glass[i].length; j++) {
      if (glass[i][j] == "H") {
        result.push(glass[i][j]);
      }
    }
  }

  return result;
}

console.log(separateLiquids([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']]));
console.log(separateLiquids([['A'],['H'],['W'],['O']]));
//   separateLiquids([['A','A','O','H'],['A', 'H', 'W', 'O'],['W','W','A','W'],['H','H','O','O']]);
  
