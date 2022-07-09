// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.



// Parameters: a positive integer

// Return: a positive integer

// Examples: 
sumCubes(2) // 9
sumCubes(3) // 36
sumCubes(4) // 100



function sumCubes(n){
    // create a variable to hold the sum
    let sum = 0;
    
    // loop from 0 to n
    for ( let i = 1 ; i <= n ; i++ ) {
      sum += Math.pow( i, 3 );
    }
    
    return sum;
}