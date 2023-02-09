// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5



// Parameters: an array of integers, never empty

// Return: an array of integers sorted by the product of the value and the index of the positions.

// Examples:
sortByValueAndIndex([ 23, 2, 3, 4, 5 ]) // [ 2, 3, 4, 23, 5 ]
sortByValueAndIndex([ 26, 2, 3, 4, 5 ]) // [ 2, 3, 4, 5, 26 ]
sortByValueAndIndex([ 9, 5, 1, 4, 3 ]) // [ 1, 9, 5, 3, 4 ]



const sortByValueAndIndex = ( arrOfNums ) => {
    // map through arrOfNums, create an array consisting of the original number and the number multiplied by its index plus 1, sort by the first value of each array, map through and grab only the first value of each array, then return
    return arrOfNums
        .map( ( num, i ) => [ num, num * i + num ] )
		.sort( ( a, b ) => a[1] - b[1] )
		.map( ( a ) => a[0] );
}