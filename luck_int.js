
function luck(num) {
    var half, sum1 = 0, sum2 = 0;
    var n = num.length;
    if (n == 0)
        return false;
    if (n % 2 == 0) {//means even
        half = n / 2;//divide into two halves
        for (let i = 0; i < half; i++) {
            let temp=parseInt(num[i]);
            sum1 += temp;
        }
        for (let i = half; i < n; i++) {
            let temp=parseInt(num[i]);
            sum2 += temp;
        }
        if (sum1 == sum2) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        half = Math.floor(n / 2);//divide into two halves
        for (let i = 0; i < half; i++) {
            let temp=parseInt(num[i]);
            sum1 += temp;
        }
        for (let i = half+1; i < n; i++) {
            let temp=parseInt(num[i]);
            sum2 += temp;
        }
        if (sum1 == sum2) {
            return true;
        }
        else {
            return false;
        }
    }

}

console.log(luck("813372"));
console.log(luck("17935"));
console.log(luck(""));//false bcz empty string
console.log(luck("56328116"));