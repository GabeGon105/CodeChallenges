// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



// Parameters: a string of letters, numbers, and punctuation

// Return: true if the argument string contains every letter of the English alphabet, else false

// Examples:
isPangram("The quick brown fox jumps over the lazy dog.") // true
isPangram("This is not a pangram.") // false



const isPangram = (string) => {
    // convert argument string to lowercase
    const lower = string.toLowerCase();

    // create an array holding every letter of the English alphabet
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // check if every letter in alphabet is included in lower, then return true or false
    return alphabet.every( (letter) => lower.includes(letter) );
}