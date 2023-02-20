// Implement a function to calculate the sum of the numerical values in a nested list.



// Parameters: an array of arrays nested within each other

// Return: an integer value representing the sum of all the values in the argument array

// Examples:
sumNested([1]) // 1
sumNested([1, 2, 3, 4]) // 10
sumNested([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // 55



const sumNested = ( nestedArrs ) => {
    // flaten nestedArrs to a depth of Infinity, reduce to find the sum, then return
    return nestedArrs.flat(Infinity).reduce( ( sum, num ) => sum += num , 0 );
}