// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.



// Parameters: a string

// Return: a boolean

// Examples:
hasUniqueChars("  nAa") // false
hasUniqueChars("abcdef") // true
hasUniqueChars("aA") //true



function hasUniqueChars(str){
    // create a new Set from str and assign to a new variable
    let newSet = new Set(str);
    
    // if the size of newSet is equal to the length of argument str, return true else return false
    return newSet.size === str.length;
}