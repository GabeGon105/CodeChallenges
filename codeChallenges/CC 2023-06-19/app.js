// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').



// Parameters: a string consisting of letters and spaces

// Return: the argument string with each even indexed letter of each word capitalized

// Examples:
toWeirdCase('This') // 'ThIs'
toWeirdCase('is') // 'Is'
toWeirdCase('This is a test') // 'ThIs Is A TeSt'



const toWeirdCase = (string) => {
    // split argument string to an array by ' ', map through to change the casing of each word, join to a string by ' ', then return
    return string.split(' ').map( (word) => {
        // split word to an array by '', map through to change each 0 or even indexed letter to uppercase, join to a string by '', then return
        return word.split('').map( (letter,i) => {
            return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        } )
        .join('');
    } )
    .join(' ')
}