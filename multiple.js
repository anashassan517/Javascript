function multipl(num) {
    var count = 0;
    while (num >= 10) {
        let product = 1;
        while (num > 0) {
            let digit = num % 10;
            product *= digit;
            num = Math.floor(num / 10);
        }
        num = product;
        count++
    }
    return count;
}
console.log(multipl(39));
console.log(multipl(999));
console.log(multipl(4));
