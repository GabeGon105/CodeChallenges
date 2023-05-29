// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.



// Parameters: an array of integers

// Return: the argument array with the odd integers sorted in ascending order while keeping all even integers in their original positions

// Examples:
sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4]
sortArray([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0]
sortArray([]) // []



const sortArray = (arr) => {
    // filter argument arr for only odd integers, sort in ascending order, then assign to a variable
    const sortedOdds = arr.filter((num) => Math.abs(num) % 2 === 1).sort((a,b) => a - b);

    // map through arr, for each odd integer, shift the first value from sortedOdds to replace the integer, then return the new array
    return arr.map( (num) => Math.abs(num) % 2 === 1 ? sortedOdds.shift() : num );
}