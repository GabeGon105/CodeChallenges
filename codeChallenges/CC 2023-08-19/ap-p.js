// Given a square matrix (i.e. an array of subarrays), find the sum of values from the first value of the first array, the second value of the second array, the third value of the third array, and so on...



// Parameters: an array of integer arrays

// Return: gather one integer from each array in an increasing index then return the sum

// Examples:
diagonalSum([[12]]) // 12
diagonalSum([[1, 2], [3, 4]]) // 5
diagonalSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // 15
diagonalSum([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]) // 34



const diagonalSum = (arrays) => {
    // reduce through arrays to add array[i] to the sum, then return
    return arrays.reduce( (sum, array, i) => sum += array[i] , 0 );
}