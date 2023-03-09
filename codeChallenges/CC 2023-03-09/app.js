// Given an array arr, swap its first and last elements and return the resulting array.

// Example
// For arr = [1, 2, 3, 4, 5], the output should be [5, 2, 3, 4, 1]

// Input/Output
// [input] integer array arr

// Constraints: 0 ≤ arr.length ≤ 50,  -1000 ≤ arr[i] ≤ 1000

// [output] an integer array

// Array arr with its first and its last elements swapped.



// Parameters: an array of integers

// Return: the argument array with the first and last elements swapped

// Examples:
firstReverseTry([1,2,3,4,5]) // [5,2,3,4,1]
firstReverseTry([]) // []
firstReverseTry([111]) // [111]
firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]) // [324, 54, 12, 3, 4, 56, 23, 12, 5, 23]firstReverseTry([-1,1]) // [1,-1]



const firstReverseTry = ( array ) => {
    // if argument array length is less than 2 return array, else slice the last element of array and concat it with a slice of the middle of array and the first value of array
    return array.length < 2 ? array : array.slice(-1).concat(array.slice(1, -1), array[0])
}