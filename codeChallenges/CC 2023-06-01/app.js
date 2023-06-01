// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.



// Parameters: an array of letters in order, with one letter missing

// Return: the letter missing from the argument array

// Examples:
findMissingLetter(['a','b','c','d','f']) // 'e'
findMissingLetter(['O','Q','R','S']) // 'P'



const findMissingLetter = (arr) => {
    // map through arr, convert every letter to it's character code, assign to a new variable
    const charCodes = arr.map( (letter) => letter.charCodeAt(0) );

    // create a variable to hold the output
    let outputCode;

    // loop from 1 to arr.length, if charCodes[i] does not equal charCodes[i-1] + 1 assign charCodes[i] - 1 to outputCode
    for ( let i = 1 ; i < arr.length ; i++ ) {
        if ( charCodes[i] !== ( charCodes[i-1] + 1 ) ) {
            outputCode = charCodes[i] - 1;
        }
    }

    return String.fromCharCode(outputCode);
}