// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

var maxSequence = function(arr){
    // ...
    if(arr.length==0){
        return maximums=0;
    }
    var maximums=-100,max=0;
    for(let i=0;i<arr.length;i++){
      max+=arr[i];
      if(max>maximums){
        maximums=max;
      }
      if(max<0){
        max=0;
      }
    }
    if(maximums<=0){
        return maximums=0;
    }
    return maximums;
  }

  console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
