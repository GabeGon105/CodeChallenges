// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.



// Parameters: an array of strings, will never be empty, every string will be a number and no letters

// Return: an array of the number equivalent of each string in the argument array

// Examples:
toNumberArray(["1", "2", "3"]) // [1, 2, 3]
toNumberArray(["1.1","2.2","3.3"]) // [1.1,2.2,3.3]



const toNumberArray = (arr) => {
    // map through arr, convert each value to a number, then return
    return arr.map( str => Number(str) );
}