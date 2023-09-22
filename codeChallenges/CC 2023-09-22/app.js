// Write a method, that replaces every nth char oldValue with char newValue.

// Inputs
// text: the string to modify
// n: change the target letter every nth occurrencies
// old_value (or similar): the targetted character
// new_value (or similar): the character to use as replacement
// Note for untyped languages: all inputs are always valid and of their expected type.

// Rules
// Your method has to be case sensitive!
// If n is 0 or negative or if it is larger than the count of the oldValue, return the original text without a change.



// Parameters: a string of letters, an integer n, a single letter string oldStr, and a single letter string newStr

// Return: return the argument string with every nth occurence of old replaced with new. If n is less than 1 return the argument string unchanged

// Examples:
replaceNth("Vader said: No, I am your father!", 2, 'a', 'o') // "Vader soid: No, I am your fother!"
replaceNth("Vader said: No, I am your father!", 4, 'a', 'o') // "Vader said: No, I am your fother!"
replaceNth("Vader said: No, I am your father!", 6, 'a', 'o') // "Vader said: No, I am your father!"
replaceNth("Vader said: No, I am your father!", 0, 'a', 'o') // "Vader said: No, I am your father!"
replaceNth("Vader said: No, I am your father!", -2, 'a', 'o') // "Vader said: No, I am your father!"
replaceNth("Vader said: No, I am your father!", 1, 'i', 'y') // "Vader sayd: No, I am your father!"



const replaceNth = ( string, n, oldStr, newStr ) => {
    // if argument n is less than 1 or greater than string.length return argument string
    if ( n < 1 || n > string.length ) return string;

    // create a variable to hold the count of oldStr occurences
    let count = 0;

    // split argument string to an array by '', map through to find every occurence of oldStr and replace with newStr if it is the nth occurence, join to a string by '', then return
    return string.split('').map( (letter) => {
        // if letter equals oldStr add 1 to count then check count, else just return letter
        if ( letter === oldStr ) {
            count++;
            // if count % n equals 0 return newStr, else return letter
            return count % n === 0 ? newStr : letter;
        }
        else return letter;
    } ).join('');
}