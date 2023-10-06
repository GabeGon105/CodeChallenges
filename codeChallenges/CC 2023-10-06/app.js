// Given two arrays of strings, return the number of times each string of the second array appears in the first array.



// Parameters: two arrays of strings

// Return: an array on integers representing how many times each string from the second array appears in the first array

// Examples:
solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']) // [2, 1, 0]
solve(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']) // [2, 1, 2]
solve(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']) // [2, 0, 1]



const solve = (array1, array2) => {
    // map through array 2 to replace each string with an integer, then return
    return array2.map( (str) => {
        // filter array1 for values that equal string, then find and return the length
        return array1.filter( (el) => el === str ).length;
    } );
}