const reverseString = function(string) {
    
    const array = string.split("");
    array.reverse();
    const result = array.join('');
    
    return result
};

// Do not edit below this line
module.exports = reverseString;
