// Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

// Example
// For example, when n = 10:

// The square of the sum of the numbers is:

// (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

// The sum of the squares of the numbers is:

// 12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

// Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640



// Parameters: an integer n

// Return: the difference between the sum of the squares of the first n natural numbers and the square of their sum.

// Examples:
differenceOfSquares(5) // 170
differenceOfSquares(10) // 2640
differenceOfSquares(100) // 25164150



const differenceOfSquares = (n) => {
    // create a variable to hold the sum of numbers and the sum of the squares
    let sum = 0;
    let sumOfSquares = 0;

    // loop from 1 to n
    for ( let i = 1 ; i <= n ; i++ ) {
        // add i to sum and add i^2 to sumOfSquares
        sum += i;
        sumOfSquares += (i*i);
    }

    // square sum, subtract sumOfSquares, then return
    return sum * sum - sumOfSquares;
}