// An element is leader if it is greater than The Sum of all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list.



// Parameters: an array of integers

// Return: an array of integers

// Examples: 
arrayLeaders ([1, 2, 3, 4, 0]) // [4]
arrayLeaders ([16, 17, 4, 3, 5, 2]) // [17, 5, 2]
arrayLeaders ([5, 2, -1]) // [5, 2]
arrayLeaders ([0, -1, -29, 3, 2]) // [0, -1, 3, 2]



function arrayLeaders(numbers){
    // create a variable to hold the final array
    let arr = [];
    
    // loop from 0 to length of argument numbers
    for ( let i = 0 ; i < numbers.length ; i++ ) {
      // slice argument numbers from i to the end and assign to a new variable
      const rightSideArr = numbers.slice( i + 1 );
      
      // reduce rightSideArr to find the sum of all values in the array, then assign to a new variable
      const rightSum = rightSideArr.reduce( ( sum, num ) => sum += num, 0 );
      
      // if numbers[i] is greater than rightSum, push numbers[i] to arr
      if ( numbers[i] > rightSum ) {
        arr.push(numbers[i]);
      }
    }
    
    return arr;
}