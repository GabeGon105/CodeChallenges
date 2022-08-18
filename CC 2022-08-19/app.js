// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Notes
// Array/list will contain positives only.
// Array/list will always have even size



// Parameters: an array of integers

// Return: an integer

// Examples: 
minSum([5,4,2,3]) // 22
minSum([12,6,10,26,3,24]) // 342
minSum([9,2,8,7,5,4,0,6]) // 74



function minSum(arr) {
    // sort argument arr from least to greatest and assign to a new variable
    const sorted = arr.sort( ( a, b ) => a - b );
    
    // create a variable to hold the final sum
    let sum = 0;
    
    // loop from 0 to half the length of array sorted
    for ( let i = 0 ; i < sorted.length / 2 ; i++ ) {
      // multiply sorted[i] by sorted[ sorted.length - 1 - i ] and add this to variable sum
      sum += sorted[i] * sorted[ sorted.length - 1 - i ];
    }
    
    return sum;
}