// Write function which will create a string from a list of strings, separated by space.



// Parameters: an array of strings

// Return: a string combining all the strings in the argument array separated by spaces

// Examples:
wordsToSentence(["hello", "world"]) // "hello world"
wordsToSentence(["I", "love", "Harry", "Potter"]) // "I love Harry Potter"



const wordsToSentence = arrayOfStrings => {
    // join argument arrayOfStrings to a string separated by a space and return
    return arrayOfStrings.join(' ');
}