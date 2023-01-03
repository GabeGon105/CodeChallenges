// A Tidy number is a number whose digits are in non-decreasing order.
// Given a number, Find if it is Tidy or not .



// Parameters: an integer, always an integer, always positive

// Return: a boolean, true if each digit is greater than or equal to the digit that follows

// Examples:
tidyNumber(12) // true
tidyNumber(102) // false
tidyNumber(9672) // false
tidyNumber(2789) // true
tidyNumber(2335) // true



const tidyNumber = ( num ) => {
    // convert num to an array
    const arr = Array.from( String( num ), Number );

    // loop from 1 to arr.length - 1, if iarr[i] is less than arr[i-1] return false
    for ( let i = 1 ; i <= arr.length - 1 ; i++ ) {
        if ( arr[i] < arr[i-1] ) return false;
    }
  
    return true;
}