// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial



// Parameters: a non-negative integer

// Return: the factorial of the parameter n, a non-negative integer

// Examples: 
factorial(3) // 6 
factorial(5) // 120
factorial(10) // 3628800



function factorial(n){
    // if n is 0, return 1
    if ( n === 0 ) {
      return 1;
    }
    
    // create a variable to hold the factorial
    let factorial = 1;
    
    // loop from n down to 1
    for ( let i = n ; i > 1 ; i-- ) {
      // multiply factorial by i
      factorial *= i;
    }
    
    return factorial;
}