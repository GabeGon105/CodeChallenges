// The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.

// For example, if n = 20, the resulting sequence will be:

// [ 20, 10, 5, 16, 8, 4, 2, 1 ]
// Write a program that will output the length of the Collatz Conjecture for any given n.
// In the example above, the output would be 8.



// Parameters: an integer, always positive, not zero

// Return: an integer representing the amount of steps it takes to reach 1 using the Collatz Conjecture

// Examples:
collatz(20) // 8
collatz(15) // 18



const collatz = ( num ) => {
    // create a variable to hold the count of steps
    let count = 1;

    // loop while num does not equal 1,
    while ( num !== 1 ) {
        // add one to count, if num is even divide by two, else divide by 3 and add 1
        count++;
        num % 2 === 0 ? num /= 2 : num = (num * 3) + 1
    }

    return count;
}