// Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.



// Parameters: three strings, two being words and one being a single letter

// Return: a string consisting of the two argument words combined into one word based on where the argument letter is located in each word

// Examples:
stringMerge("person","here", "e") // "pere"
stringMerge("apowiejfoiajsf","iwahfeijouh", "j") // "apowiejouh"
stringMerge("abcdefxxxyzz","abcxxxyyyxyzz", "x") // "abcdefxxxyyyxyzz"
stringMerge("12345654321","123456789", "6"), "123456789"
stringMerge("JiOdIdA4","oopopopoodddasdfdfsd", "d") // "JiOdddasdfdfsd"
stringMerge("incredible","people", "e") // "increople"



const stringMerge = (word1, word2, letter) => {
    // slice word1 from 0 to word1.indexOf(letter), slice word2 from word2.indexOf(letter), add these two together, then return
    return word1.slice( 0, word1.indexOf(letter) ) + word2.slice( word2.indexOf(letter) );
}