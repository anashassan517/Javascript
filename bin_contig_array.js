// s = [1,1,0,1,1,0,1,1]
//          |_____|
//             |      
//          [0,1,1,0]
         
//          length = 4

function binarray(a) {
    var total=0,count1=0,count0=0,len1=0,len0=0;
    for(let i=0;i<a.length;i++){ 
      if(a[i]==1){
        count1+=1;
        len1+=1;
      }
      else{
      count0+=1;
      len0+=1;
      }
      if(len0==len1){
        total=len1+len0;
      }
      else{   
        continue;
      }
    }
    return total;
  }
  
  console.log(binarray([0,1,1,0,1,1,1,0,0,0])); //should give 10
  console.log(binarray([0,0,1,1,1,0,0,0,0,0])); // should give 6
  