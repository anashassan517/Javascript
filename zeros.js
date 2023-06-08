// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    var non=[],zero=[];
    for(let i=0;i<arr.length;i++){
      if(arr[i]===0){
        zero.push(arr[i]);
      }
      else{
        non.push(arr[i]);
      }
    }
    let result=non.concat(zero);
    return result;
  }
  