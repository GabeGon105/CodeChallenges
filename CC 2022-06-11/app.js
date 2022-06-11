// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12  throw a RangeError.



// Parameters:

// Return:

// Examples:

function factorial(n) {
    // if n is less than 0 or greater than 12, return RangeError
    if ( n < 0 || n > 12 ) {
      throw RangeError;
    }
    // if n is 0, return 1
    if ( n === 0 ) {
      return 1;
    }
    
    // create a variable to hold factorial value
    let factorial = 1;
    
    // loop from 1 to n
    for ( let i = 1 ; i <= n ; i++ ){
      // multiply factorial by i
      factorial *= i;
    }
    
    return factorial;
}