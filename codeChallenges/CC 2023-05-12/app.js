// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// If a value is present in b, all of its occurrences must be removed from the other



// Parameters: two arrays of integers

// Return: the first array with the integers in the second array filtered out

// Examples:
arrayDiff([1,2], [1]) // [2]
arrayDiff([1,2,2], [1]) // [2,2]
arrayDiff([1,2,2], [2]) // [1]



const arrayDiff = (arr1, arr2) => {
    // filter arr1 for only values not included in arr2, then return
    return arr1.filter( (num) => !arr2.includes(num) );
}