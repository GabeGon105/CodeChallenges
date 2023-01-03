// Given a non-negative integer, return an array / a list of the individual digits in order.



// Parameters: a non-negative integer

// Return: an array of single-digit integers

// Examples:
digitize(123) // [1,2,3]
digitize(1) // [1]
digitize(8675309) // [8,6,7,5,3,0,9]



function digitize(n) {
    // convert n to a string, then assign to a variable
    let str = String(n);
    
    // split str by '' into an array, loop through and convert each string to a number, and assign to a variable
    let arr = str.split('').map( char => Number(char) );
    
    return arr;
}