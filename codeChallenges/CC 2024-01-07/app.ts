// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].



export const flattenAndSort = ( inputArray: number[][] ): number[] => {
    // flatten the array to a depth of infinity
    // sort in asending order
    return inputArray.flat().sort( (a,b) => a - b );
}