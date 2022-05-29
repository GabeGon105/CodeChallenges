// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.



// Parameters: a non-empty, nested array of arrays containing positive integers

// Return: an integer, the sum of the minimum values in each nested array

// Example:
sumOfMinimums[ [ 1, 2, 3, 4, 5 ], [ 5, 6, 7, 8, 9 ], [ 20, 21, 34, 56, 100 ] ] // 26
// the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.



function sumOfMinimums(arr) {
    //create variable to hold the sum
    let sum = 0;
    
    //loop through each array in arr
    arr.forEach( nestedArr => {
      //sort nestedArr from lowest to highest value
      nestedArr.sort( ( a, b ) => a - b );
      //add the minimum value in nestedArr to variable sum
      sum += nestedArr[0];
    } );
    
    return sum;
  }