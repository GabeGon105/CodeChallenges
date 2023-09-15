// In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

// All inputs will be lowercase letters.



// Parameters: a string of lowercase letters

// Return: true if each letter occurs only once and when sorted alphabetically all letters occur consecutively, else false

// Examples:
solve("abc") // true
solve("abd") // false
solve("dabc") // true
solve("abbc") // false



const solve = (string) => {
    // split argument string to an array by '', map through to convert each letter to its character code, sort from least to greatest, then assign to a variable
    const sortedCharCodes = string.split('').map( (letter) => letter.charCodeAt(0) ).sort( (a,b) => a - b );

    // loop through sortedCharCodes to check if every value is equal to sortedCharCodes + index to return true or false
    return sortedCharCodes.every( ( charCode, i ) => charCode === sortedCharCodes[0] + i );
}