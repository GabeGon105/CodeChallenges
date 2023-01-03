// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *
// You need to return the nth triangular number. You should return 0 for out of range values:



triangular(0) // 0
triangular(2) // 3
triangular(3) // 6
triangular(-10) // 0


// Parameters: an integer

// Return: an integer

// Examples: 
triangular(0) // 0
triangular(2) // 3
triangular(3) // 6
triangular(-10) // 0



function triangular( n ) {
    // if n is negative, return 0
    if ( n < 0 ) {
      return 0;
    }
    
    // create a variable to hold the total
    let total = 0;
    
    // loop from 0 to n
    for ( let i = 0 ; i <= n ; i++ ) {
      // add i to variable total
      total += i;
    }
    
    return total;
}