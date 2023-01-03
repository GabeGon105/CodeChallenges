// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.



// Parameters: a positive integer

// Return: a positive integer

// Examples: 
findSum(5) // 8
findSum(10) // 33 
findSum(6) // 12



function findSum(n) {
    // create a variable to hold the sum
    let sum = 0;
    
    // loop from 0 to n
    for ( let i = 1 ; i <= n ; i++ ) {
      // if i is divisible by 3 or 5, add i to sum
      if ( i % 3 === 0 || i % 5 === 0 ) {
        sum += i;
      }
    }
    
    return sum;
}