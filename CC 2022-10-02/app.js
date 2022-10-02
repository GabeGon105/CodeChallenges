// Get the averages of these numbers

// Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

// If the array has 0 or 1 values or is null, your method should return an empty array.



// Parameters: an array of integers

// Return: an array of integers

// Examples:
averages([2, 2, 2, 2, 2]) // [2, 2, 2, 2]
averages([2, -2, 2, -2, 2]) // [0, 0, 0, 0]
averages([1, 3, 5, 1, -10]) // [2, 4, 3, -4.5]



function averages(numbers) {
    // if argument numbers has less than 2 values in it, return an empty array
    if ( numbers < 2 ) {
      return [];
    }
    
    // create a variable to hold the output array
    let arr = [];
    
    // loop from 0 to the length of argument numbers minus 1
    for ( let i = 0 ; i < numbers.length - 1 ; i++ ) {
      // take the average of the current number and the next number, then push to arr
      arr.push( ( numbers[i] + numbers[i+1] ) / 2 );
    }
    
    return arr;
}