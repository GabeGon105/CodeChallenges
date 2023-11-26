// Given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



// Parameters: a string of words

// Return: an integer representing the length of the shortest word



export function findShort(words: string): number {
    // split argument words to an array by ' ',
    // map through to return each length
    const lengths: number[] = words.split(' ')
        .map( (word) => word.length )

    // return the Math.min() of lengths
    return Math.min(...lengths);
}



console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("lets talk about javascript the best language"), 3);