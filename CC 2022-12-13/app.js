// Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Don't round the numbers! Just cut them after two decimal places!



// Parameters: a number with at least 2 digits in the decimals, always a valid number

// Return: the argument number with only the first two decimal values, DO NOT round

// Examples:
twoDecimalPlaces(10.1289767789) //  10.12
twoDecimalPlaces(-7488.83485834983) //  -7488.83
twoDecimalPlaces(4.653725356) //  4.65



const twoDecimalPlaces = num => {
    // multiply num by 100, truncate it using Math.trunc(), then divide by 100 and return
    return Math.trunc(num*100)/100;
}