// There exist two zeroes: +0 (or just 0) and -0.

// Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

// In JavaScript / TypeScript / Coffeescript the input will be a number.



// Parameters: an integer

// Return: true if the argument integer is -0, otherwise false

// Examples:
isNegativeZero(-5) // false
isNegativeZero(-4) // false
isNegativeZero(-3) // false
isNegativeZero(-2) // false
isNegativeZero(0) // false



const isNegativeZero = (num) => {
    // use Object.is() to check if num is the same as -0, then return true or false
    return Object.is( num, -0 );
}