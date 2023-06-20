function brack(str) {
    var opencount = 0, closecount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            opencount++
        }
        else if (str[i] == ')') {
            if (opencount > 0) {
                opencount--;
            }
            else {
                closecount++;
            }
        }
    }
    var fixed = str;
    for (let i = 0; i < opencount; i++) {
        fixed = fixed + ')';
    }
    for (let i = 0; i < closecount; i++) {
        fixed ='('+ fixed ;
    }
    return fixed;
}

console.log(brack(')('));
console.log(brack('))))(()('));