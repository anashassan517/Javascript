// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) {
    var words = str.split(' '); // Split the string into an array of words
    var pigLatinWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
  
      if (isAlphabetic(word)) {
        var pigLatinWord = convertToPigLatin(word);
        pigLatinWords.push(pigLatinWord);
      } else {
        pigLatinWords.push(word);
      }
    }
  
    return pigLatinWords.join(' ');
  }
  function isAlphabetic(word) {
    // Check if the word consists of alphabetic characters
    for (var i = 0; i < word.length; i++) {
      var char = word[i];
  
      if (!(char >= 'a' && char <= 'z') && !(char >= 'A' && char <= 'Z')) {
        return false;
      }
    }
  
    return true;
  }
  
  
  function convertToPigLatin(word) {
    var firstChar = word[0];
    var restOfWord = word.slice(1);
    return restOfWord + firstChar + 'ay';
  }
  