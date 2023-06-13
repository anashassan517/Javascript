function validParentheses(parenstr) {
  // Your code here
  var n = parenstr.length;
  var stack = [];
  if (n == 0) {
    return true;
  } else {
    for (let i = 0; i < n; i++) {
      if (parenstr[i] == "(") {
        stack.push(parenstr[i]);
      }
      if (parenstr[i] == ")" && stack.length == 0 && stack.pop()!='(') {
        return false;
      } else if (parenstr[i] == ")" && stack.length !=0) {
        stack.pop();
      }
    }

  }
   return stack.length===0;

}

console.log(validParentheses("(((()())))")); // returns false








// function validParentheses(parenstr) {
//   // Your code here
//   var n = parenstr.length;
//   var stack = [];
//   if (n == 0) {
//     return true;
//   } else {
//     for (let i = 0; i < n; i++) {
//       if (parenstr[i] == "(") {
//         stack.push(parenstr[i]);
//       } else if (parenstr[i] == ")") {
//         if ( stack.length == 0 ) {
//           return false;
//         } else {
//           stack.pop();
//         }
//       }
//     }
//   }
//     return stack.length == 0;
// }


// console.log(validParentheses("()())")); // returns false
