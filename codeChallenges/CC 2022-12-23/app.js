// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.



// Parameters: an array of integers, may be empty

// Return: an integer sum of all even indexed integers multiplied by the last integer in the sequence

// Example:
evenLast( [2, 3, 4, 5] ) // 30



const evenLast = arr => {
    // filter through arr for only even indexed numbers, reduce the new array to find the sum, then multiply by arr[arr.length-1] and return
    return arr.filter( ( num, i ) => i % 2 === 0 ).reduce( ( sum, num ) => sum += num , 0 ) * arr[arr.length-1] || 0;
}