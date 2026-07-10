function repeatString(word, numRepeats) {
    let newWord = "";
    for(let i = 0; i < numRepeats; i++) {
        newWord += word;
    }
    if(numRepeats >= 0) {
        return newWord;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
