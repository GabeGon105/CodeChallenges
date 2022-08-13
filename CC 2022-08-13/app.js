// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.



// Parameters: an object

// Return: an array of two arrays

// Example:
keysAndValues({a: 1, b: 2, c: 3}) // [['a', 'b', 'c'], [1, 2, 3]] 



function keysAndValues(data){
    // return an array of two arrays: an array of argument data's keys and an array of argument data's key values
    return [ Object.keys(data) , Object.values(data) ];
}