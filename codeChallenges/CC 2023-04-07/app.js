// Write a program that outputs the top n elements from a list.



// Parameters: an integer n and an array of integers

// Return: an array containing the n largest integers from the argument array in ascending order

// Examples:
largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // [9, 10]
largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // []
largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5]) // [-1, 0]
largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5]) // [5, 5, 5]
largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]) // [3, 5, 9, 13, 22, 50, 63]
largest(0, [1, 2, 3, 4, 8, 7, 6, 5]) // []



const largest = (n, array) => {
    // if argument n equals 0 return [], else sort argument array in descending order, slice from -n, then return
    return n === 0 ? [] : array.sort((a,b) => a - b).slice(-n);
}