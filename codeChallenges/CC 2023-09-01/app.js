// Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

// If n is not in the given array, return an empty array [].

// Assume that n and all values in the given array will always be integers.



// Parameters: an array of integers and an integer n

// Return: return an array of integers representing the indeces of argument n in the argument array

// Examples:
findAll([6, 9, 3, 4, 3, 82, 11], 3) // [2, 4]
findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16) // [1, 9]
findAll([20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15, 5], 20) // [0, 1, 8]



const findAll = (array,n) => {
    // create an variable to hold the output array
    const output = [];

    // loop through argument array, if the number equals n push the index to output
    array.forEach( (num,i) => num === n ? output.push(i) : null );

    return output;
}