// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3



//1st method


// function zero(operation) {
//   if (operation) {
//     return operation(0);
//   }
//   return 0;
// }

// function one(operation) {
//   if (operation) {
//     return operation(1);
//   }
//   return 1;
// }

// function two(operation) {
//   if (operation) {
//     return operation(2);
//   }
//   return 2;
// }

// function three(operation) {
//   if (operation) {
//     return operation(3);
//   }
//   return 3;
// }

// function four(operation) {
//   if (operation) {
//     return operation(4);
//   }
//   return 4;
// }

// function five(operation) {
//   if (operation) {
//     return operation(5);
//   }
//   return 5;
// }

// function six(operation) {
//   if (operation) {
//     return operation(6);
//   }
//   return 6;
// }

// function seven(operation) {
//   if (operation) {
//     return operation(7);
//   }
//   return 7;
// }

// function eight(operation) {
//   if (operation) {
//     return operation(8);
//   }
//   return 8;
// }

// function nine(operation) {
//   if (operation) {
//     return operation(9);
//   }
//   return 9;
// }

// function plus(b) {
//   return function(a) {
//     return a + b;
//   };
// }

// function minus(b) {
//   return function(a) {
//     return a - b;
//   };
// }

// function times(b) {
//   return function(a) {
//     return a * b;
//   };
// }

// function dividedBy(b) {
//   return function(a) {
//     return Math.floor(a / b);
//   };
// }




//2nd method

function zero(operation = null) {
    if (operation) {
      return operation(0);
    }
    return 0;
  }
  
  function one(operation = null) {
    if (operation) {
      return operation(1);
    }
    return 1;
  }
  
  function two(operation = null) {
    if (operation) {
      return operation(2);
    }
    return 2;
  }
  
  function three(operation = null) {
    if (operation) {
      return operation(3);
    }
    return 3;
  }
  
  function four(operation = null) {
    if (operation) {
      return operation(4);
    }
    return 4;
  }
  
  function five(operation = null) {
    if (operation) {
      return operation(5);
    }
    return 5;
  }
  
  function six(operation = null) {
    if (operation) {
      return operation(6);
    }
    return 6;
  }
  
  function seven(operation = null) {
    if (operation) {
      return operation(7);
    }
    return 7;
  }
  
  function eight(operation = null) {
    if (operation) {
      return operation(8);
    }
    return 8;
  }
  
  function nine(operation = null) {
    if (operation) {
      return operation(9);
    }
    return 9;
  }
  
  function plus(num) {
    return function (operand) {
      return operand + num;
    };
  }
  
  function minus(num) {
    return function (operand) {
      return operand - num;
    };
  }
  
  function times(num) {
    return function (operand) {
      return operand * num;
    };
  }
  
  function dividedBy(num) {
    return function (operand) {
      return Math.floor(operand / num);
    };
  }
  
six(dividedBy(two())); // must return 3
