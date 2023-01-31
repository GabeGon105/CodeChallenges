// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).



// Parameters: two arrays, may contain any characters, may be empty

// Return: true if the arrays share at least 1 identical element, else return false

// Examples:
duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]) // true
duplicateElements([9, 8, 7], [8, 1, 3]) // true



const duplicateElements = ( arr1, arr2 ) => {
    // check if at least one value from arr1 is included in arr2
    return arr1.some( value => arr2.includes(value) );
}