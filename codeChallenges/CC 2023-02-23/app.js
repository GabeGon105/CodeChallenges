// For every positive integer N, there exists a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

// For example, given N = 13, the sequence is [1, 3, 6, 13], because . . . :

//  3 =  2*1 +1
//  6 =  2*3
//  13 = 2*6 +1



// Parameters: an integer N

// Return: an array representing a unique sequence starting with 1 and ending with N and such that every number in the sequence is either the double of the preceeding number or the double plus 1.

// Examples:
climb(1) // [1]
climb(10) // [1, 2, 5, 10]
climb(13) // [1, 3, 6, 13]



const climb = ( n ) => {
    // create a variable to hold the output sequence and initialize it with n
    const outputArr = [ n ];

    // loop while n does not equal 1
    while ( n !== 1 ) {
        // set n equal to n divided by 2 rounded down, then unshift n to outputArr
        n = Math.floor( n / 2 );
        outputArr.unshift(n);
    }

    return outputArr;
}