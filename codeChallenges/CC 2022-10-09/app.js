// In mathematics, the factorial of integer 'n' is written as 'n!'. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer 'n' and returns 'n!'.

// You are guaranteed an integer argument. For any values outside the positive range, return null, nil or None .

// Note: 0! is always equal to 1. Negative values should return null;



// Parameters: an integer

// Return: an integer or null

// Examples:
factorial(2) // 2
factorial(5) // 120
factorial(-1) // null



function factorial (n) {
    // if argument n is less than 0, return null
    if ( n < 0 ) return null;
    
    // if argument n equals 0, return 1, else multiply argument n by function factorial n minus 1
    return n == 0 ? 1 : n * factorial(n - 1);
}