// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.



// Parameters: three positive, non-zero integers

// Return: true or false

// Examples: 
isDivisible(3, 1, 3) // true
isDivisible(12, 2, 6) // true
isDivisible(100, 5, 3) // false



function isDivisible(n, x, y) {
    // if n is divisible by x and y return true, else return false
    return ( n % x === 0 && n % y === 0 );
}