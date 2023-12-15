// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



// Parameters: a string of words

// Return: the argument string with each word reversed in place



export const reverseWords = (str: string): string => {
    // split argument str by ' ', map through
    // join to an array by ' '
    return str.split(' ').map( (word) => {
        // split each word to an array, reverse, join
        return word.split('').reverse().join('');
    } ).join(' ')
}



console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');