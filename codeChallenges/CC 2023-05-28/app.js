// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.



// Parameters: an integer

// Return: true if the argument integer is a prime number, else false

// Examples:
isPrime(0) // false
isPrime(1) //  false
isPrime(2) //  true
isPrime(73) // true
isPrime(75) // false
isPrime(-1) // false



const isPrime = (num) => {
    // loop from 2 to square root of num, if num is divisible by i return false
    for ( let i = 2 ; i <= Math.sqrt(num) ; i++ ) {
        if ( num % i === 0 ) return false;
    }
    // if num is less than 2, return false
    return num > 1;
}