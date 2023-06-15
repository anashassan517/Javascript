
// 11 => [2, 3, 5, 7, 11]


function prime(num) {
    var count, result = [];
  
    if (num >= 2) {
      result.push(2);
    }
  
    for (let i = 3; i <= num; i++) {
      count = 0;
  
      for (let j = 2; j <= i / 2; j++) {
        if (i % j === 0) {
          count++;
          break;
        }
      }
  
      if (count === 0) {
        result.push(i);
      }
    }
  
    return result;
  }
  