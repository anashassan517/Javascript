// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]


function twoSum(numbers, target) {
  let n=numbers.length;
  let answer=[];
  for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
      if(numbers[i]+numbers[j]==target){
         answer[0]=i;
         answer[1]=j;
        return answer;
      }
    }
  }
  return [];
}