// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.



// Parameters: an array of integers

// Return: an integer representing the sum of all unique integers in the argument array

// Examples:
sumNoDuplicates([1, 1, 2, 3]) // 5
sumNoDuplicates([]) // 0
sumNoDuplicates([1, 1, 2, 2, 3]) // 3
sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]) // 21
sumNoDuplicates([0, 10, 8, 9, 7, 3, 3, 9, 3, 6, 0]) // 31
sumNoDuplicates([0, 1, 4, 4, 0, 4, 2, 5, 9, 0, 10, 9, 0, 1, 2]) // 15
sumNoDuplicates([7, 2, 10, 9, 10, 2, 7, 3, 10, 8, 2, 5]) // 25
sumNoDuplicates([7, 2, 0, 3, 5, 7, 8, 3, 2, 10, 9, 5]) // 27
sumNoDuplicates([1, 9, 9, 5, 7, 7, 6, 1, 5, 6]) // 0



const sumNoDuplicates = (array) => {
    // filter through argument array, return integers that appear only once in the array, reduce to find the sum, then return
    return array.filter( (num) => {
        // filter through array for num to check if num appears only once
        return array.filter( (int) => int === num ).length === 1;
    } )
    .reduce( (sum,num) => sum += num, 0 );
}