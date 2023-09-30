// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.



// Parameters: an array of unique integers

// Return: the argument array sorted in a way that the first value is the max value, then the min value, then the second max value, then the second min value, etc.

// Examples:
solve([15,11,10,7,12]) // [15,7,12,10,11]
solve([91,75,86,14,82]) // [91,14,86,75,82]
solve([84,79,76,61,78]) // [84,61,79,76,78]
solve([52,77,72,44,74,76,40]) // [77,40,76,44,74,52,72]



const solve = (array) => {
    // sort argument array from least to greatest
    array.sort( (a,b) => a - b );

    // create an array of length array.length, map through to shift odd indexed values and pop() even indexed values from array, then return
    return [...Array(array.length)].map((_, i) => i % 2 ? array.shift() : array.pop());
}