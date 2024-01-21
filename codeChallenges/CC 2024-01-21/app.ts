// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
// Explanation:
// Max product obtained from multiplying 5 * 10  =  50 .



const adjacentElementsProduct = (arr: number[]):number => {
    let maxProduct = arr[0]*arr[1];

    // loop from 1 to arr.length
    for ( let i = 1 ; i < arr.length ; i++ ) {
        // if arr[i]*arr[i-1] > maxProduct, reassign
        if ( arr[i]*arr[i-1] > maxProduct ) maxProduct = arr[i]*arr[i-1];
    }

    return maxProduct;
}