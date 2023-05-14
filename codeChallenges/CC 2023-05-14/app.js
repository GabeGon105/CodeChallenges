// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



// Parameters: a string of letters and numbers

// Return: an integer representing the number of letters (case insensitive) and numbers that appear more than once in the argument string

// Examples:
duplicateCount("") // 0
duplicateCount("abcde") // 0
duplicateCount("aabbcde") // 2
duplicateCount("aabBcde") // 2
duplicateCount("Indivisibility") // 1
duplicateCount("Indivisibilities") // 2



const duplicateCount = (string) => {
    // create a variable to hold the output integer and a variable to hold the repeated letters
    let output = 0;
    const repeated = [];

    // convert argument string to an array, loop through
    string.split('').forEach( (letter) => {
        // if string.split('') includes more than 1 of letter && repeated does not include letter, add 1 to output and add letter to repeated
        if ( 
            string.split('').filter( ( el ) => el.toLowerCase() === letter.toLowerCase() ).length > 1 
            && !repeated.includes(letter.toLowerCase())
            ) {
                output++
                repeated.push(letter.toLowerCase());
        }
    } )

    return output;
}