// Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.

// Your function should be case insensitive to the vowels.



// Parameters: a string of letters, upper and lowercase, may be empty

// Return: the argument string with all vowels replaced by their index integer

// Examples:
vowel2index('this is my string') // 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') // 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') // ''



const vowel2index = (str) => {
    // replace all vowels in argument str with its index + 1, then return
    return str.replace( /[aeiouAEIOU]/g , ( letter, index ) => index + 1 );
}