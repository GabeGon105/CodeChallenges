// In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.



// Parameters: two arrays of integers, equal lengths

// Return: an array of integers consisting the of largest value between same-indexed values of the two arrays

// Example:
const arr1 = [13, 64, 15, 17, 88];
const arr2 = [23, 14, 53, 17, 80];
getLargerNumbers(arr1, arr2) // [23, 64, 53, 17, 88]



const getLargerNumbers = (arr1, arr2) => {
    // map through arr1, for each index check the value from arr2 and return the larger value, then return the new array
    return arr1.map( (num, i) => Math.max(num,arr2[i]) );
}