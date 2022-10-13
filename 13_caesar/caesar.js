
function caesar(string, key) {

    const strSize = string.length;
    // create array to receive letters from the string
    const phrase = [...string];
    // create array to receive encrypted text
    let cryp = [...Array(strSize)];
    // check if string is alphanumerique
    const isAlpha = str => /^[a-zA-Z]*$/.test(str);

    // check if key is negative, then we convert it to a positive shift (key) (-5 is the same as +21 letters)
    if (key < 0) { key = 26 + (key % 26); }
    
    // loop into each characters
    for (let j = 0; j < strSize; j++) {
        // rotate letter when uppercase

        if (isAlpha(phrase[j]) && phrase[j] === phrase[j].toUpperCase()) {
            //asign cypher letter
            cryp[j] = String.fromCharCode((((phrase[j].codePointAt(0) - 65 + key) % 26) + 65));
        }
        // rotate letter when lowercase
        else if (isAlpha(phrase[j]) && phrase[j] === phrase[j].toLowerCase()) {
            //asign cypher letter
            cryp[j] = String.fromCharCode((((phrase[j].codePointAt(0) - 97 + key) % 26) + 97));
        }
        // dont rotate when not alpha
        else {
            cryp[j] = phrase[j];
        }
    }

    return cryp.join('');
}


// Do not edit below this line
module.exports = caesar;
