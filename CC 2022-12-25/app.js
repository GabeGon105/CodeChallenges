// Implement a function that returns the minimal and the maximal value of a list (in this order).



// Parameters: an array of integers

// Return: an array of the minimum and maximum values of the argument array

// Examples:
getMinMax([1]) // [1,1] 
getMinMax([1,2]) // [1,2]
getMinMax([2,1]) // [1,2]



const getMinMax = arr => {
    // return an array of the minimum and maximum value from argument arr using Math.min() and Math.max()
    return [ Math.min(...arr), Math.max(...arr) ];
}