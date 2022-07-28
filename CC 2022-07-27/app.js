// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.



// Parameters: an array of integers and a single integer

// Return: an array

// Examples: 
evenNumbers( [1, 2, 3, 4, 5, 6, 7, 8, 9], 3 ) // [4, 6, 8]
evenNumbers( [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2 ) // [-8, 26]
evenNumbers( [6, -25, 3, 7, 5, 5, 7, -3, 23], 1 ) // [6]



function evenNumbers(array, number) {
    // filter just the even numbers from argument array, then assign to a new variable
    let evensArr = array.filter( num => num % 2 === 0 );
    
    // slice evensArr by the negative of argument number, then return
    return evensArr.slice(-number);
}