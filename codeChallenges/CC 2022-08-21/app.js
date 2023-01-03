// Given an array/list [] of integers , Find the product of the k maximal numbers.
// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.



// Parameters: an array of integers and an integer

// Return: an integer

// Examples:
maxProduct ([4, 3, 5], 2) // 20
maxProduct ([8, 10 , 9, 7], 3) // 720
maxProduct ([10, 8, 3, 2, 1, 4, 10], 5) // 9600
maxProduct ([-4, -27, -15, -6, -1], 2) // 4
maxProduct ([10, 3, -1, -27] , 3)  // -30



function maxProduct(numbers, size){
    // sort argument numbers by greatest to largest, slice argument size starting from 0, and assign to a new variable
    let sortedAndSliced = numbers.sort( ( a, b ) => b - a ).slice(0, size);
    
    // reduce sortedAndSlice by multiply each value, then return
    return sortedAndSliced.reduce( ( acc, num ) => acc *= num, 1 );
}