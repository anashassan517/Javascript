function largestSum(arr) {
  var max = Number.NEGATIVE_INFINITY,
    sum = 0;
  if (arr.length == 0) {
    return (max = 0);
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) sum = 0;//as want to search max in contigous array
  }
  if (max < 0) max = 0;//to avoid less value
  return max;
}

console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84])); //187
console.log(largestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
