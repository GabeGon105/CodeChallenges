// Define a method/function that removes from a given array of integers all the values contained in a second array.



// Parameters: two arrays of integers

// Return: the first argument array excluding all integers included in the second argument array

// Examples:
[1, 1, 2, 3, 1, 2, 3, 4], [1, 3] // [2, 2, 4]
[1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] // [5, 6, 7, 8]
[8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] // [8, 7, 6, 5, 1]



Array.prototype.remove_ = function(arr1, arr2) {
    // filter through arr1, only return numbers that are not included in arr2, then return the new array
    return arr1.filter( (num) => !arr2.includes(num) );
}