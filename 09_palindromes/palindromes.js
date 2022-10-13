const palindromes = function (string) {

    // remove punctuation and white space
    let mystring = string.replace(/[^A-Z0-9]/ig, ""); 
    // put string in lowercase
    mystring = mystring.toLowerCase();
    //put string into an array
    mystring = [...mystring];
    // create a new array with the string reversed
    let mystringReverse = [...mystring].reverse();

    // compare each letter of the two arrays. it should be the same each time to get a palindrome.
    for (let i = 0; i < mystring.length; i++) {

        if (mystring[i] !== mystringReverse[i]) {
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
