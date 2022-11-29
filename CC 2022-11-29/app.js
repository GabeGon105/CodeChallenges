// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.



// Parameters: an array of integers, never empty, may be positive

// Return: a new array of integers containing at each index i the amount of numbers that are smaller than arr[i] to the right

// Examples:
smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]
smaller([1, 2, 3]) // [0, 0, 0]
smaller([1, 2, 0]) // [1, 1, 0]
smaller([1, 2, 1]) // [0, 1, 0]
smaller([1, 1, -1, 0, 0]) // [3, 3, 0, 0, 0]



const smaller = (arrOfNums) => {
    // map through argument arrOfNums, slice from the current position, filter the integers greater than the current integer, return the length, then return this new array
    return arrOfNums.map( ( num, i ) => arrOfNums.slice(i).filter( numRight => num > numRight ).length );
}