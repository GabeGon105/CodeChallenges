// You are given an array of n+1 integers 1 through n. In addition there is a single duplicate integer.
// The array is unsorted.
// An example valid array would be [3, 2, 5, 1, 3, 4]. It has the integers 1 through 5 and 3 is duplicated. [1, 2, 4, 5, 5] would not be valid as it is missing 3.
// You should return the duplicate value as a single integer.



// Parameters: an array of integers 1 through n, unsorted, one duplicate value, never empty 

// Return: an integer, the duplicate value of the argument array

// Examples:
findDup([1,2,2,3]) // 2
findDup([1,3,2,5,4,5,7,6]) // 5



const findDup = ( arr ) => {
    // create a variable to hold the duplicate
    let duplicate;

    // sort arr and assign to a new variable
    let arrSorted = arr.sort();

    // loop from 1 to arr.length - 1, and compare the values of each index of arr.sort() to find duplicate
    for ( let i = 1 ; i <= arr.length - 1 ; i++ ) {
        if ( arrSorted[i] === arrSorted[i-1] ) duplicate = arrSorted[i]
    }

    return duplicate;
}