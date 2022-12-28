// Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array.



// Parameters: an array of integers

// Return: the argument array but all values doubled

// Example:
double( [1,2,10,57] ); // [2,4,20,114]



const double = arr => {
    // map through arr, multiply each value by 2, then return the new array
    return arr.map( num => num * 2 );
}