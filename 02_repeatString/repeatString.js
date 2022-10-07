const repeatString = function (string, number) {
    let result = "";
    
    for (i = 0; i < number; i++) {
        result = result + string
    }
    if(number<0){
        result="ERROR";
    }
    return result;
};
console.log(repeatString("hey", 3));
// Do not edit below this line
module.exports = repeatString;
