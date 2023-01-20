// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").



// Parameters: a string of letters

// Return: the argument string without any vowels

// Examples:
removeVowels("drake") // "drk"
removeVowels("aeiou") // ""



const removeVowels = string => {
    // split argument string to an array by "a", then join back to a string. Repeat this for each vowel then return
    return string   .split('a').join('')
                    .split('e').join('')
                    .split('i').join('')
                    .split('o').join('')
                    .split('u').join('');
}