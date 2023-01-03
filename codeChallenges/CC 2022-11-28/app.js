// In this kata you will create a function to check a non-negative input to see if it is a prime number.

// The function will take in a number and will return True if it is a prime number and False if it is not.

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.



// Parameters: an integer, non-negative

// Return: true if the argument integer is a prime number, else return false

// Examples:
isPrime(0) // false
isPrime(1) // false
isPrime(2) // true
isPrime(11) // true
isPrime(12) // false



const isPrime = (num) => {
    // loop from 2 to the square root of argument num, if num is not divisible by i, return false
    for  (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false; 
    }
    // if num is greater than 1 return true, else return false
    return num > 1;
}