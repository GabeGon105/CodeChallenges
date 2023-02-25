// You are given an array of values.

// Sum every number value in the array, and any nested arrays (to any depth).

// Ignore all other types of values.



// Parameters: an array of values

// Return: an integer representing the sum of every number value in the argument array and in any nested arrays

// Examples:
arraySum([1, 2]) // 3
arraySum([1, 2, 3]) // 6
arraySum([1, 2, [1, 2]]) // 6



const arraySum = ( array ) => {
    // flatten argument array to a depth of Infinity, filter only numbers, reduce to find the sum of all number values in the array, then return
    return array.flat(Infinity).filter( element => Number(element) === element ).reduce( ( sum, num ) => sum += num , 0 );
}