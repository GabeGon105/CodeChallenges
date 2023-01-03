// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .
// Array/list's numbers Will be mixture of positives and negatives also zeros_
// Repetition of numbers in the array/list could occur.
// The Maximum Gap is computed Regardless the sign.



// Parameters: an array of integers

// Return: an integer

// Examples:
maxGap ([13,10,5,2,9]) // 4
maxGap ([-3,-27,-4,-2]) // 23
maxGap ([-7,-42,-809,-14,-12]) // 767
maxGap ([-54,37,0,64,640,0,-15]) // 576



function maxGap (numbers){
    // sort argument numbers from greatest to least and assign to a new variable
    const sortedArr = numbers.sort( ( a, b ) => b - a );
    
    // create a variable to hold the max gap
    let maxGap = 0;
    
    // loop from 0 to the length of sortedArr - 1
    for ( let i = 0 ; i < sortedArr.length - 1 ; i++ ) {
      // if sortedArr[i] minus sortedArr[ i + 1 ] is greater than maxGap, reassign the difference to maxGap
      if ( sortedArr[i] - sortedArr[ i + 1 ] > maxGap ) {
        maxGap = sortedArr[i] - sortedArr[ i + 1 ];
      }
    }
    
    return maxGap;
}