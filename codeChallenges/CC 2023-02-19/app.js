// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

// [ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
// Therefore the result must be:

// [ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]




// Parameters: an integer

// Return: an array of all possible sum of two digits from the argument integer

// Examples:
digits(156) // [ 6, 7, 11 ]
digits(81596) // [ 9, 13, 17, 14, 6, 10, 7, 14, 11, 15 ]
digits(3852) // [ 11, 8, 5, 13, 10, 7 ]



const digits = ( integer ) => {
    // create an array to hold the output array
    const outputArr = [];

    // convert argument integer to a string
    const str = integer.toString();

    // loop from 0 to str.length
    for ( let i = 0 ; i < str.length ; i++ ) {
        // loop from j to str.length
        for ( let j = i + 1 ; j < str.length ; j++ ) {
            // add Number(str[i]) and Number(str[j]), then push this to outputArr
            outputArr.push( Number( str[i] ) + Number(str[j] ) );
        }
    }
    
    return outputArr;
}