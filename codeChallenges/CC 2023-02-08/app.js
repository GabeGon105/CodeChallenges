// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}



// Parameters: two arrays of integers, may be different lengths

// Return: one array of integers with numbers of both arrays shuffled one by one

// Examples:
compoundArray([11, 12], [21, 22, 23, 24]) // [11, 21, 12, 22, 23, 24]
compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]) // [2147483647,9,2147483646,2147483645,2147483644,2147483643]
compoundArray([214,215,216,217,218], []) // [214,215,216,217,218]



const compoundArray = ( arr1, arr2 ) => {
    // create a new variable to hold the output array
    const outputArr = [];

    // loop from 0 to the largest between arr1.length and arr2.length
    for ( let i = 0 ; i < Math.max( arr1.length, arr2.length ) ; i++ ) {
        // if arr1[i] exists push it to outputArr, else null
        !isNaN(arr1[i]) ? outputArr.push( arr1[i] ) : null;
        // if arr2[i] exists push it to outputArr, else null
        !isNaN(arr2[i]) ? outputArr.push( arr2[i] ) : null;
    }

    return outputArr;
}