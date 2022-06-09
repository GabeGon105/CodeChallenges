// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.



// Parameters: array of numbers

// Return: array of numbers, sorted from least to greatest OR an empty array

// Examples:
solution([1, 2, 10, 50, 5]); // [1,2,5,10,50]
solution(null); // []



function solution(nums){
    // if nums is empty or null, return an empty array
    if ( nums === [] || nums === null ) {
      return [];
    }
    
    // sort nums from least to greatest value and return
    return nums.sort( ( a, b ) => a - b );
  
}