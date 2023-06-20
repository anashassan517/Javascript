function consec(str, k) {
    var word, max = Number.NEGATIVE_INFINITY, len = 0, result = [], res_leng = [], temp;
    if (str.length == 0)
        return result.push(" ");
    for (let i = 0; i < str.length - 1; i++) {
        var lim = 0;
        if (lim == k) {
            break;
        }
        word = str[i].concat(str[i + 1]);
        result.push(word);
        k++;
    }

    for (let i = 0; i < result.length; i++) {//store all resulted word length into this
        res_leng[i] = result[i].length;
    }
    var index;
    temp = res_leng[0];
    for (let i = 1; i < res_leng.length; i++) {
        if (max < temp) {
            max = temp;
            index = i;
        }
    }
    return result[index];

}
console.log(consec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));//should return "folingtrashy"
console.log(consec(["zone","abigail","theta","form","libe","zas","theta","abigail"],2)); //should return "abigailtheta"