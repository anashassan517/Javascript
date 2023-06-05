// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str) {
    var string = [];
    var n = str.length;
  
    for (let i = 0; i < n; i += 2) {
      if (i === n - 1) {
        string.push(str[i] + "_");
      } else {
        string.push(str[i] + str[i + 1]);
      }
    }
    return string;
  }