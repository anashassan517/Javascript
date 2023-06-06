// function findOdd(A) {
//   //happy coding!
//   temp=[];
//   for(let i=0;i<A.length;i++){
//     temp[i]=0;
    
//   }
  
//   for(let i=0;i<A.length;i++){
//     if(temp[A[i]]===A[i]){
      
//     }
    
//   }
  
//   return 0;
// }


function findOdd(A) {
    let counts = {};
  
    for (let num of A) {
      if (counts[num]) {
        counts[num]++;
      } else {
        counts[num] = 1;
      }
    }
  
    for (let num in counts) {
      if (counts[num] % 2 !== 0) {
        return parseInt(num);
      }
    }
  
    return 0; // Default value if no odd occurrences found
  }
  