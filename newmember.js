// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]



function openOrSenior(data) {
    var result = [];
  
    for (var i = 0; i < data.length; i++) {
      var age = data[i][0];
      var handicap = data[i][1];
  
      if (age >= 55 && handicap > 7) {
        result.push("Senior");
      } else {
        result.push("Open");
      }
    }
  
    return result;
  }