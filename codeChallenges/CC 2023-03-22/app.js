// Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

// Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).



// Parameters: an array of values

// Return: an array containing only the duplicates from the argument array in the same order they originally appeared

// Examples:
duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]) // [4, 3, 1]
duplicates([0, 1, 2, 3, 4, 5]) // []



const duplicates = (arr) => {
    // filter through argument arr for elements whose indexOf() do not equal its index AND its lastIndexOf() does equal its index
    return arr.filter( ( el, i ) => arr.indexOf(el) !== i && arr.lastIndexOf(el) === i );
}