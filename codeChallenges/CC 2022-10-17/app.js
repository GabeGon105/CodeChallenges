// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD



// Parameters: a string, uppercase and lowercase, may include spaces, no special characters

// Return: a string, swap all lowercase and uppercase, keep spaces

// Examples:
alternateCase("abc") // "ABC"
alternateCase("ABC") // "abc"
alternateCase("Hello World") // "hELLO wORLD"



const alternateCase = (s) => {
    // convert argument s to an array, map through and swap all lowercase and uppercase letters
    const swappedArr = s.split('').map( letter => {
        return letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
    } );

    // join swappedArr and return
    return swappedArr.join('');
}