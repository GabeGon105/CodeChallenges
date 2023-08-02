// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For this kata, capitals are considered the same as lowercase letters. Therefore: "A" == "a"

// The input is a string (with no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < length < 100.




// Parameters: a string of letters, numbers, and symbols

// Return: true if all the characters in the argument string appear the same number of times, else return false

// Examples:
validateWord("abcabc") // true
validateWord("Abcabc") // true
validateWord("abc123") // true
validateWord("abcabcd") // false
validateWord("abc!abc!") // true
validateWord("abc:abc") // false



const validateWord = ( word ) => {
    // set argument word to all lowercase and assign to a variable
    const lower = word.toLowerCase();

    // if the length of lower divided by the length of a new set from lower equals zero return true, else return false
    return lower.length % new Set(lower).size === 0;
}