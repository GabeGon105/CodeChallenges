// Input : an array of integers.

// Output : this array, but sorted in such a way that there are two wings:

// the left wing with numbers decreasing,

// the right wing with numbers increasing.

// the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.

// each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.




// Parameters: an array of integers

// Return: the argument array of integers sorted in a waya that the numbers are decreasing, switching from the begining and end of the array

// Examples:
makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]) // [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
makeValley([20, 7, 6, 2]) // [20, 6, 2, 7]
makeValley([14, 10, 8]) // [14, 8, 10]
makeValley([20, 18, 17, 13, 12, 12, 10, 9, 4, 2, 2, 1, 1]) // [20, 17, 12, 10, 4, 2, 1, 1, 2, 9, 12, 13, 18]



const makeValley = (array) => {
    // create an variable to hold the output array
    const output = [];

    // sort argument array from least to greatest, loop through to unshift all even indexed values to output and push all odd indexed values to output
    array.sort( (a,b) => a - b ).forEach( (num, i) => {
        // if array.length is odd, alternate between unshift then push, else alternate between push then unshift
        if ( array.length % 2 !== 0 ) {
            i % 2 === 0 ? output.unshift(num) : output.push(num);
        }
        if ( array.length % 2 === 0 ) {
            i % 2 === 0 ? output.push(num) : output.unshift(num);
        }
    } );

    return output;
}