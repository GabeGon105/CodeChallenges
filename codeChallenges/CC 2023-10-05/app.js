// Complete the function that takes an array of words.

// You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.



// Parameters: an array of string words

// Return: a string consisting of the nth letter of each word in the argument array starting at index 0 and increasing 1 each word

// Examples:
nthChar([]) // ''
nthChar(['yoda', 'best', 'has']) //  'yes'



const nthChar = (words) => {
    // map through argument words to return each letter in index i, join to a string, then return
    return words.map( (word, i) => word[i] ).join('');
}