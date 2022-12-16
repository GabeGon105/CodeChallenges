// Write a function that returns True if all parameters are of the Number type.
// The function should accept any number of parameters.



// Parameters: any number of arguments of any type, never empty

// Return: if all arguments are of the Number type return true, else return false

// Examples:
numbers(1, 4, 3, 2, 5) // true
numbers(1, "a", 3) // false
numbers(1, 3, NaN) // true



const numbers = (...args) => {
    // use the .every() method to return whether or not every argument is of type Number
    return args.every( arg => typeof arg === 'number' )
}