// Given an array of numbers, return the difference between the largest and smallest values.

// For example:

// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).

// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).

// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.



// Parameters: an array of integers, contains at least 2 elements

// Return: an integer representing the difference between the max and min values of the input array

// Examples:
betweenExtremes([21, 34, 54, 43, 26, 12]) // 42
betweenExtremes([-1, -41, -77, -100]) // 99



const betweenExtremes = ( numsArr ) => {
    // using the ... spread syntax inside Math.max() and Math.min(), return the difference between the max and min values
    return Math.max( ...numsArr ) - Math.min( ...numsArr ) ;
}