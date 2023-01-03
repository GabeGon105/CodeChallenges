// Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.



// Parameters: two integers, always positive

// Return an array of the multiples of the second argument a number of times equal to the first argument

// Examples:
multiples(3, 5) // [5, 10, 15]
multiples(5, 2) // [2, 4, 6, 8, 10]
multiples(4, 7) // [7, 14, 21, 28]



const multiples = ( mult, num ) => {
    // create a variable to hold the output array
    let arr = [];

    // loop from 1 to mult, push num * i to variable arr
    for ( let i = 1 ; i <= mult ; i++ ) {
        arr.push( num * i );
    }

    return arr;
}