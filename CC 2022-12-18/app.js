// Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

// Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.



// Parameters: two integer arrays, second array is a shuffled duplicate of the first with one element missing, only integers

// Return: the integer missing from the second array

// Examples:
findMissing([1, 2, 3], [1, 3]) // 2
findMissing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) // 8
findMissing([7], []) // 7



const findMissing = ( arr1, arr2 ) => {
    // if arr1.length === 1 return arr1[0], else return the sum of arr1 minus the sum of arr2
    return arr1.length === 1 ? arr1[0] : arr1.reduce( ( acc,num ) => acc + num ) - arr2.reduce( ( acc,num ) => acc + num );
}