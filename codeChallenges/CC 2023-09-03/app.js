// Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).



// Parameters: a string of characters and a string of a single character

// Return: replace every character in the first argument string with a number representing the number of times that character appears in the string with each character seperated by the second argument string

// Examples:
freqSeq('hello world', '-') // '1-1-3-3-2-1-1-2-1-3-1'
freqSeq('19999999',    ':') // '1:7:7:7:7:7:7:7'
freqSeq('^^^**$',      'x') // '3x3x3x2x2x1'



const freqSeq = (string, sep) => {
    // split argument string to an array by ''. map through to replace each character with a number, join by argument sep, then return
    return string.split('').map( (char) => {
        // split string to an array, filter for char, then return the length as a string
        return string.split('').filter( (el) => el === char ).length + '';
    } )
    .join(sep);
}