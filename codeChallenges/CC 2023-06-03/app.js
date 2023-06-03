// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.



// Parameters: a string of words

// Return: the word from the argument string whose letters add up to achieve the highest "score" based on "a" = 1, "b" = 2, etc.

// Examples:
high('man i need a taxi up to ubud') // 'taxi'
high('what time are we climbing up the volcano') // 'volcano'
high('take me to semynak') // 'semynak'
high('aa b') // 'aa'



const high = (string) => {
    // split argument string by " ", map through, split each word to an array and reduce down to its sum, then assign to a variable
    const arrOfSums = string.split(" ").map( (word) => {
        return word.split("").reduce( (sum, letter) => sum + (letter.charCodeAt(0) - 96 ), 0 );
    } );

    // assign the greatest value of arrOfSums to a variable
    const greatest = Math.max(...arrOfSums);

    // find the index of the first value of arrOfSums that matches greatest
    const index = arrOfSums.indexOf(greatest);

    // split argument string by " ", then return the word at index
    return string.split(" ")[index];
}