// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// don't worry about uppercase vowels
// y is not considered a vowel for this kata



// Parameters:

// Return: 

// Examples:
shortcut("hello") // "hll"
shortcut("codewars") // "cdwrs"
shortcut("goodbye") // "gdby"
shortcut("HELLO") // "HELLO"



function shortcut (string) {
    // replace all instances of 'a' 'e' 'i' 'o' 'u' in parameter string with '' and assign to finalStr
    let finalStr = string.replace(/aeiou/gi,'');
    
    return finalStr;
}