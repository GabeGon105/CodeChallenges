// A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".

// In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".

// [ 0,  1,    3,      6,   ...]
//   0  0+1  0+1+2  0+1+2+3

// Your Task
// Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.



// Parameters: an integer

// Return: an array of integers

// Examples:
sumOfN(5) // [0,  1,  3,  6,  10,  15]
sumOfN(-5) // [0, -1, -3, -6, -10, -15]
sumOfN(7) // [0,  1,  3,  6,  10,  15,  21,  28]



function sumOfN(n) {
    // create a variable to hold the final array
    let arr = [ 0 ];
    
    // loop from 1 to the absolute value of n
    for ( let i = 1 ; i <= Math.abs(n) ; i++ ) {
      // if n is positive, add arr[ i-1 ] and i, then push this value to arr
      if ( n > 0 ) {
        arr.push( arr[i-1] + i );
      }
      // else, subtract i from arr[ i - 1 ], then push this value to arr
      else {
        arr.push( arr[i-1] - i );
      }
    }
    
    return arr;
};