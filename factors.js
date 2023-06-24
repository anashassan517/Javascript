function primefactors(num){
var divisor=2;
var factor=[];

while(num>1){
    if(num%divisor==0){
        factor.push(divisor);
        num=num/divisor;
    }
    else{
    divisor++;}
}
    
return factor;
}

console.log(primefactors(1));
console.log(primefactors(3));
console.log(primefactors(8));
console.log(primefactors(9));
console.log(primefactors(12));