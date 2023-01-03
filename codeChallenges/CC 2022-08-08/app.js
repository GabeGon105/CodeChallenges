// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.



// Parameters: an integer

// Return: a single-digit integer

// Examples:
digital_root(16) // 1 + 6 = 7
digital_root(942) // 9 + 4 + 2 = 15  -->  1 + 5 = 6
digital_root(132189) // 1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
digital_root(493193) // 4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2



function digital_root(n) {
    // create a variable to hold the final sum
    let finalSum = n;
    
    // create a variable to hold the current sum
    let currentSum = n;
    
    // create a loop that runs as long as finalSum has a length greater than 1
    while ( finalSum.toString().length > 1 ) {
      finalSum = 0;
      
      // convert currentSum to a string, split to an array, loop through each value, and convert back to a number
      currentSum.toString().split('').forEach( int => {
        // convert int to a number, then add it to finalSum
        finalSum += parseInt(int);
      } )
      
      currentSum = finalSum;
    }
  
    return finalSum;
}