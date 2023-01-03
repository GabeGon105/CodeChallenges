// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// ...until the most recent addition is equal to 1.

// All elements of the sum are the results of integer division.



// Parameters: 

// Return: 

// Examples: 
halvingSum(25) // 47 (25 + 12 + 6 + 3 + 1 = 47)
halvingSum(10) // 18 (10 + 5 + 2 + 1 = 18)
halvingSum(15) // 26 (15 + 7 + 3 + 1 = 26)



function halvingSum(n) {
    // create a variable to hold the divider
    let divider = 1;
    
    // create a variable to hold the sum
    let sum = 0;
    
    // create a variable to hold the current addition
    let currentAdd;
    
    // loop while recentAdd does not equal 1
    while ( currentAdd !== 1 ) {
      // divide n by the divider, round down to the nearest integer, and assign this value to currentAdd
      currentAdd = Math.floor( n / divider );
      
      // add currentAdd to sum
      sum += currentAdd;
      
      // multiply divider by 2, then reassign to divider
      divider *= 2;
    }
    
    return sum;
}