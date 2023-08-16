// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// All inputs will be strings, consisting only of characters ( and ).
// Empty strings are considered balanced (and therefore valid), and will be tested.
// For languages with mutable strings, the inputs should not be mutated.



// Parameters: a string of parentheses

// Return: true or false depending on if each set of parentheses is correctly closed

// Examples:
validParentheses(true) // "()"
validParentheses(true) // "((()))"
validParentheses(true) // "()()()"
validParentheses(true) // "()(())((()))(())()"
validParentheses(false) // ")("
validParentheses(false) // "()()("
validParentheses(false) // "())(()");



const validParentheses = (string) => {
    // create a variable to hold an integer representation of open/closed parentheses
    let parens = 0;

    // loop from 0 to string.length
    for ( let i = 0 ; i < string.length ; i++ ) {
        // if parens is 0 or greater, add 1 to parens for string[i] === '(' or remove 1 from parens for ')'
        if ( parens >= 0 ) string[i] === '(' ? parens++ : parens--;
    }

    // return whether or not parens equals zero
    return parens === 0;
}