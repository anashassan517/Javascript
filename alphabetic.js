// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore


function alphanumeric(string){
    string = string.trim();
    //your code here
      if (string.length === 0) {
      return false; // empty string is not alphanumeric
      }
      for(let i=0;i<string.length;i++){
        if(!
        (
          (string[i] >= 'A' && string[i] <= 'Z') ||
          (string[i] >= 'a' && string[i] <= 'z') ||
          (string[i] >= '0' && string[i] <= '9') ||
          !(string[i] === ' ' ||
          string[i] === '_' ||
          string[i] === '/' ||        
          string[i] === '!' ||
          string[i] === '#' ||
          string[i] === '$' ||
          string[i] === '%' ||
          string[i] === '*' ||
          string[i] === '(' ||
          string[i] === ')' ||
          string[i] === '-' ||
          string[i] === '+' ||        
          string[i] === '@')
        )
         ) {
        return false;
      }
    }
      return true;
  }