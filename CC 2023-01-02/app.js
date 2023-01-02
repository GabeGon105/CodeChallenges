// Given an integer n and two other values, build an array of size n filled with these two values alternating.



// Parameters: an integer n and two other values of any kind

// Reuturn: an array of length n alternating between the two argument values

// Examples:
alternate(5, true, false) //  [true, false, true, false, true]
alternate(20, 'blue', 'red') //  ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']
alternate(0, "lemons", "apples") //  []



const alternate = ( num, val1, val2 ) => {
    // create a variable to hold the output array
    let outputArr = [];

    // create an array from arguments val1 and val2
    let arr = [ val1, val2 ];

    // loop from 0 to num, push arr[ i % 2 ] to outputArr
    for ( let i = 0 ; i < num ; i++ ) {
        outputArr.push( arr[ i % 2 ] );
    }

    return outputArr;
}