// Coding in function maxMin. function accept 2 parameter arr1 and arr2. They are two number array and have the same number of elements.

// First, calculate the difference of the same index of the arr1 and arr2. Like this:

// [1,3,5]
//  | | |   --->  8, 5, 2
// [9,8,7]

// Then find the maximum and minimum values of them, and return the results in the form of an array. Like this:

//   maxvalue , minvalue
// [    8     ,    2     ]



// Parameters: two arrays of numbers of equal size

// Return: an array of two numbers representing the max and min value of the differences between the two argument arrays

// Examples:
maxMin([1,3,5],[9,8,7]) // [8,2]
maxMin([1,10,100,1000],[0,0,0,0]) // [1000,1]
maxMin([10,20,30,40],[111,11,1,-111]) // [151,9]



const maxMin = ( arr1, arr2 ) => {
    // map through arr1 and create a new array by taking the difference between arr1 and arr2 at each index
    const arrOfDiff = arr1.map( ( num, i ) => Math.abs( num - arr2[i] ) );

    // return an array of the max value and min value of arrOfDiff
    return [ Math.max( ...arrOfDiff ) , Math.min( ...arrOfDiff ) ];
}