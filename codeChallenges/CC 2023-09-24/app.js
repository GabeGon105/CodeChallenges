// Your task is very simple. Just write a function that takes an input string of lowercase letters and returns true/false depending on whether the string is in alphabetical order or not.



// Parameters: a string of lowercase letters

// Return: true if the argument str is in alphabetical order, else return false

// Examples:
alphabetic("asd") // false
alphabetic("codewars") // false
alphabetic("door") // true
alphabetic("cell") // true
alphabetic("z") // true
alphabetic("") // true



const alphabetic = (string) => {
    // split argument string to an array by '', sort in to alphabetical order, join back to a string by '', then assign to a variable
    const sorted = string.split('').sort().join('');

    // if string is equal to sorted return true, else return false
    return string === sorted;
}