// When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

// Parameters: a string of words separated by spaces, all lowercase, never empty

// Return: a string of the longest word of the argument string, if two words are equal length return the word that occurs last

// Examples:
longestWord('a b c d e fgh') // "fgh"
longestWord('one two three') // "three"
longestWord('red blue grey') // "grey"



const longestWord = (words) => {
    // split argument words by spaces into an array, sort by length
    let sortedByLength = words.split(' ').sort( ( a, b ) => a.length > b.length );

    // return the final string in variable sortedByLength
    return sortedByLength[sortedByLength.length - 1];
}