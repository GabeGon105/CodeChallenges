// Write a function that appends the items from sequence 2 onto sequence 1, returning the newly formed sequence. Your function should also be able to handle nested sequences.

// All inputs will be arrays/nested arrays.



// Parameters: two arrays, arrays may contain nested arrays

// Return: one array combining both argument arrays into one

// Examples:
appendArrays([1,2], [2,4]) // [1,2,2,4])
appendArrays([1,2],[3,4]) // [1,2,3,4])
appendArrays(['this'],['that']) // ['this','that'])
appendArrays(['a','B'],['c','D']) // ['a','B','c','D'])
appendArrays([1,2], [1]) // [1,2,1]



const appendArrays = ( arr1, arr2 ) => {
    // concat argument arr2 to the end of argument arr1 to combine the arrays
    return arr1.concat(arr2)
}