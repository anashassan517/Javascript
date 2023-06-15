function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.getMatchingWords = function(pattern) {
  var res = [];
  for (let i = 0; i < this.words.length; i++) {
    var word = this.words[i];//one word at a time
    if (pattern.length !== word.length) {
      continue;//this condition help in avoiding cherry and cherry* due to length diff
    }
    var isMatch = true;
    for (let j = 0; j < word.length; j++) {
      if (pattern[j] != '?' && pattern[j] != word[j]) {
        isMatch = false;
        break;
      }
    }
    if (isMatch) {
      res.push(word);
    }
  }
  return res;
}

var fruits = new Dictionary(['banana', 'apple', 'papaya', 'cherry']);
console.log(fruits.getMatchingWords('lemon'));     // must return []
console.log(fruits.getMatchingWords('cherr??'));   // must return []
console.log(fruits.getMatchingWords('?a?a?a'));    // must return ['banana', 'papaya']
console.log(fruits.getMatchingWords('??????'));    // must return ['banana', 'papaya', 'cherry']

