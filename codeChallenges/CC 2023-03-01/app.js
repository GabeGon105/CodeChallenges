// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possibilities, else false.



// Parameters: an array of integers, never empty

// Return: true or false depending if the argument array contains all numbers from 0 to array.length - 1

// Examples:
isAllPossibilities([0,1,2,3]) // true
isAllPossibilities([1,2,3,4]) // false



const isAllPossibilities = ( arr ) => {
    // if argument arr is empty, return false
    if ( arr.length === 0 ) return false
    
    // loop through and check if every index is included in the array, then return
    return arr.every( ( num, i ) => arr.includes(i) );
}