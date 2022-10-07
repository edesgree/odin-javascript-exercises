const sumAll = function (a, b) {
    let sum = null;
    let large = null;
    let small = null;
    if (a > b) {
        large = a;
        small = b;
    } else if (a < b) {
        small = a;
        large = b;
    }
    for (i = small; i <= large; i++) {
        sum = sum + i;
    }
    if (a === b) {
        sum = a + b;
    }
    if (a < 0 || b < 0 ) {
        return 'ERROR';
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return 'ERROR';
    }
    
    return sum;
};
console.log(sumAll(4, "b"));
// Do not edit below this line
module.exports = sumAll;
