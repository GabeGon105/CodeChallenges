// Write a function that doubles every second integer in a list, starting from the left.



// Parameters: an array of integers

// Return: the same argument integer with every other integer doubled

// Examples:
doubleEveryOther([1,2,3,4]) // [1,4,3,8]
doubleEveryOther([2,4,6,8]) // [2,8,6,16]
doubleEveryOther([10,20,30,40]) // [1,40,3,80]



const doubleEveryOther = arr => {
    // map through argument arr, if index is odd double the number, else return the same integer, then return the new array
    return arr.map( ( num, i ) => i % 2 === 1 ? num * 2 : num );
}