// Write a function that returns only the decimal part of the given number.

// You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.



// Parameters: a number, may be positive or negative

// Return: a number, only the decimal part of the argument number

// Examples:
getDecimal(2.4) // 0.4
getDecimal(-0.2) // 0.2
getDecimal(10) // 0



const getDecimal = (num) => {
    // find the remainder after dividing argument num by 1, then return the absolute value
    return Math.abs( num % 1 )
}