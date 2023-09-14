// You have to search all numbers from inclusive 1 to inclusive a given number x, that have the given digit d in it.
// The value of d will always be 0 - 9.
// The value of x will always be greater than 0.

// You have to return as an array

// the count of these numbers,
// their sum
// and their product.

// If there are no numbers, which include the digit, return [0,0,0].



// Parameters: an integer x and an integer d

// Return: find all the values from 1 to x that include integer d as a digit, then return an array consisting of the count of these values, their sum, and their product

// Examples:
numbersWithDigitInside(1,0) // [ 0, 0, 0 ]
numbersWithDigitInside(7,6) // [ 1, 6, 6 ]
numbersWithDigitInside(11,1) // [ 3, 22, 110 ]
numbersWithDigitInside(20,0) // [ 2, 30, 200 ]



const numbersWithDigitInside = ( x, d ) => {
    // create an array to hold the numbers that contain argument d as a digit
    const array = [];

    // loop from 1 to argument x
    for ( let i = 1 ; i <= x ; i++ ) {
        // if i includes d push i to array
        if ( i.toString().includes(d.toString()) ) array.push(i);
    }

    // if array is empty return [0,0,0], else return an array consisting of the length of array, the sum, and the product
    return array.length === 0
        ? [0,0,0]
        : [
            array.length,
            array.reduce( (sum, num) => sum += num , 0 ),
            array.reduce( (product, num) => product *= num , 1 )
        ];
}