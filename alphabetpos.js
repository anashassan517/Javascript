// Given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.



function alphabetPosition(text) {
    var result = "";
    var lowercaseText = text.toLowerCase();
  
    for (var i = 0; i < lowercaseText.length; i++) {
      var charCode = lowercaseText.charCodeAt(i);
  
      if (charCode >= 97 && charCode <= 122) { // Check if the character is a lowercase letter
        var position = charCode - 96;
        result += position.toString() + " ";
      }
    }
  
    return result.trim();
  }