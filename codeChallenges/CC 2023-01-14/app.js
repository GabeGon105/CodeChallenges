// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).

// Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.



// Parameters: an array of integers, may be empty

// Return: the argument array with each integer added by its index + 1, if the final integer has multiple digits return only the last digit

// Examples:
incrementer([]) //  []
incrementer([1, 2, 3]) //  [2, 4, 6]
incrementer([4, 6, 7, 1, 3]) //  [5, 8, 0, 5, 8]
incrementer([3, 6, 9, 8, 9]) //  [4, 8, 2, 2, 4]



const incrementer = array => {
    // map through argument array, add index + 1 then return the remainder after % 10, then return the new array
    return array.map( ( num, i ) => ( num + i + 1 ) % 10 );
}