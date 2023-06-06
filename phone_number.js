
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


function createPhoneNumber(numbers) {
    numbers = numbers.join(""); // Convert the numbers array to a string
    var temp = "(" + numbers.slice(0, 3) + ") " + numbers.slice(3, 6) + "-" + numbers.slice(6, 10);
    return temp;
  }
  