// Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.



// Parameters: a string of words and an integer n, string never empty

// Return: an array of all words from the argument string that are longer than the argument integer n

// Example:
filterLongWords("The quick brown fox jumps over the lazy dog", 4) // ['quick', 'brown', 'jumps']



const filterLongWords = ( strWords, length ) => {
    // split strWords to an array by ' ', filter words that are longer than argument length, then return
    return strWords.split(' ').filter( word => word.length > length );
}