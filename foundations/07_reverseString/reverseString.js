function reverseString(word) {
    let revWord = "";
    for(const char of word) {
        revWord = char + revWord;
    }
    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
