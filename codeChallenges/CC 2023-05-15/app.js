// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.



// Parameters: a string of characters

// Return: a string consisting of '(' for each unique character (case insensitive) and ')' for each non-unique character

// Examples:
duplicateEncode("din") // "((("
duplicateEncode("recede") // "()()()"
duplicateEncode("Success") // ")())())"
duplicateEncode("(( @") // "))(("



const duplicateEncode = (string) => {
    // set argument string to all lowercase
    const lower = string.toLowerCase();
    // split argument string to an array, map through to change each character to '(' and ')', join back to an array, then return
    return string.split('').map( (char) => {
        // if the character is unique return '(', else return ')'
        return lower.lastIndexOf(char.toLowerCase()) === lower.indexOf(char.toLowerCase()) ? '(' : ')'
    } )
    .join('');
}