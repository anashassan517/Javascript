// As an added challenge, upper- and lowercase letters are considered
//  the same character, but the function should return the correct case for
//   the initial letter. For example, the input 'sTreSS' should return 'T'.



function firstNonRepeatingLetter(s) {
    s = s.trim();
    var result = '', n = s.length, count = 0;
    if (n == 1) {
      return s;
    } else {
      for (let i = 0; i < n; i++) {
        count = 0;
        for (let j = 0; j < n; j++) {
          if (i !== j && s[i].toLowerCase() == s[j].toLowerCase()) {
            count++;
            break;
          }
        }
        if (count === 0) {
          result = s[i];
          break;//this means we found a 1st letter that is not repeated 
        }
      }
    }
  
    return result;
  }
  
  console.log(firstNonRepeatingLetter('sTreSs')); // Output: "t"
  