// Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

// Your function should return true if all elements in the array are square numbers and false if not.

// An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.



// Parameters: an array of integers

// Return: true if all integers in the argument array are squared numbers, false if not, and undefined if the array is empty

// Examples:
isSquare([1, 4, 9, 16, 25, 36]) // true
isSquare([1, 2, 3, 4, 5, 6]) // false
isSquare([]) // undefined
isSquare([1, 2, 4, 15]) // false



const isSquare = (array) => {
    // if argument array is empty return undefined
    if (array.length === 0) return undefined;

    // check if every integer in array to see if it can be square rooted to a whole number, then return true or false
    return array.every( (num) => num**0.5 % 1 === 0 );
}