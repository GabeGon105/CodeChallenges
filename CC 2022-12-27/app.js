// Write a function that combines two arrays by alternatingly taking elements from each array in turn.



// Parameters: two arrays, one array of lowercase letters, one array of positive integers, may be different lengths

// Return: a single array combining both argument arrays by alternating between the two initial arrays

// Examples:
mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']) // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]) // ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']) // [2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']



const mergeArrays = ( arr1, arr2 ) => {
    // create a variable to hold the output array
    let arrFinal = [];

    // if arr1.length > arr2.length, loop from 0 to arr1.length, else loop from 0 to arr2.length
    if ( arr1.length > arr2.length ) {
        for ( let i = 0 ; i < arr1.length ; i++ ) {
            // push arr1[i] and arr2[i] to arrFinal
            arrFinal.push(arr1[i]);
            arr2[i] ? arrFinal.push(arr2[i]) : null;
        }
    }
    else {
        for ( let i = 0 ; i < arr2.length ; i++ ) {
            // push arr1[i] and arr2[i] to arrFinal
            arr1[i] ? arrFinal.push(arr1[i]) : null;
            arrFinal.push(arr2[i]);
        }
    }
  
    return arrFinal;
}