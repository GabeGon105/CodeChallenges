// Move every letter in the provided string forward 10 letters through the alphabet.

// If it goes past 'z', start again at 'a'.

// Input will be a string with length > 0.



// Parameters: a string of lowercase letters

// Return: the argument string with each letter replaced by the letter that is 10 letters ahead of it

// Examples:
moveTen("testcase") // "docdmkco"
moveTen("codewars") // "mynogkbc"
moveTen("exampletesthere") // "ohkwzvodocdrobo"



const moveTen = (string) => {
    // split argument string to an array by '', map through to change each letter to the letter 10 ahead of it, join to a string, then return
    return string.split('').map( (letter) => {
        // convert letter to its char code, subtract 97, add 10, find the remainder after dividing by 26, add 97, convert back to a letter from char code, then return this letter
        return String.fromCharCode( ( letter.charCodeAt(0) - 97 + 10 ) % 26 + 97 );
    } ).join('');
}