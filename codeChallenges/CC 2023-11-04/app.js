// Write a program that, given a word, computes the scrabble score for that word.

// Letter Values
// You'll need these:

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.

// Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.



// Parameters: string, upper and lowercase, can be empty

// Return: an integer representing the score, or 0

// Examples:
scrabbleScore("") // 0
scrabbleScore('a') // 1
scrabbleScore("street") // 6
scrabbleScore(' a') // 1
scrabbleScore("st re et") // 6



const scrabbleScore = (string) => {
    // set argument string to uppercase
    // split argument string to an array
    // reduce through to sum each letter value
    return string.toUpperCase().split('')
        .reduce( (sum,letter)=> sum += ($dict[letter] || 0), 0 );
}