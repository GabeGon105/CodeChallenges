// Create a function called one that accepts two params:

// a sequence
// a function

// and returns true only if the function in the params returns true for exactly one (1) item in the sequence.



// Parameters: an array of integers and a function

// Return: true if the argument function returns true for exactly 1 integer in the argument array, else false

// Examples:
one([1,2,3,4,5], function(item){ return item<2}) // true
one([1,2,3,4,5], function(item){ return item%2 }) // false
one([1,2,3,4,5], function(item){ return item>5 }) // false



const one = (array,func) => {
    // filter through argument array for only values
    // that return true when passed through argument func,
    // then return whether or not the array length equals 1
    return array.filter( (num) => func(num) ).length === 1;
}