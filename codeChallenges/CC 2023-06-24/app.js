// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.




// Parameters: a string of letters

// Return: an integer representing the number of consonants in the argument string

// Examples:
consonantCount('y') // 1
consonantCount('Y') // 1
consonantCount('01234567890_') // 0
consonantCount(' ^&$#') // 0
consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#') // 42



const consonantCount = (str) => {
    // create a variable to hold a string of only lowercase consonant letters
    const consonants = 'bcdfghjklmnpqrstvwxyz'

    // set all letters in argument str to lowercase, split to an array by '', filter through to collect only the consonants, then return the length
    return str.toLowerCase().split('').filter( (char) => consonants.includes(char) ).length;
}